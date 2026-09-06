import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../models/api';
import { Property } from '../../models/types';
import { Button } from '../components/Button';
import { useAuth } from '../../controllers/useAuth';
import { useToast } from '../../controllers/useToast';

export const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { showToast } = useToast();
  
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [requesting, setRequesting] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      api.getPropertyById(id).then(data => {
        if (data) setProperty(data);
        setLoading(false);
      });
    }
  }, [id]);

  const handleRequest = async () => {
    if (!user) {
      navigate('/auth/login');
      return;
    }
    if (user.role !== 'TENANT') {
      showToast('Only tenants can request to rent properties.', 'error');
      return;
    }

    setRequesting(true);
    try {
      await api.submitRentalRequest(property!.id, user.id);
      setRequestSuccess(true);
      showToast('Request submitted successfully!', 'success');
    } catch (e) {
      showToast('Failed to submit request', 'error');
    } finally {
      setRequesting(false);
    }
  };

  if (loading) return <div className="animate-pulse h-[400px] bg-slate-200 rounded-2xl" />;
  if (!property) return <div className="text-center py-20 text-slate-500">Property not found.</div>;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="h-64 md:h-[400px] w-full relative bg-slate-200">
        <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 md:p-10 flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-8">
          <div>
            <div className="flex justify-between items-start gap-4">
              <h1 className="text-3xl font-bold text-slate-900">{property.title}</h1>
              <span className="text-3xl font-black text-blue-600 shrink-0">${property.price}<span className="text-lg text-slate-400 font-normal">/mo</span></span>
            </div>
            <p className="text-slate-500 mt-2 text-lg">{property.location} • {property.type}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Description</h3>
            <p className="text-slate-700 leading-relaxed text-lg">{property.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map(amenity => (
                <span key={amenity} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-80 bg-slate-50 p-6 rounded-2xl border border-slate-200 h-fit shrink-0">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Rent this property</h3>
          {requestSuccess ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 text-center font-medium">
              Request submitted successfully! The landlord will review it shortly.
            </div>
          ) : (
            <Button 
              className="w-full py-3" 
              onClick={handleRequest} 
              disabled={!property.isAvailable || requesting}
            >
              {requesting ? 'Submitting...' : property.isAvailable ? 'Request to Rent' : 'Not Available'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
