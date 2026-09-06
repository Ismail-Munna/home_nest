import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useToast } from '../../../controllers/useToast';

export const AddProperty = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      showToast('Property created successfully!', 'success');
      navigate('/dashboard/landlord');
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Add New Property</h1>
        <Button variant="outline" onClick={() => navigate('/dashboard/landlord')}>Cancel</Button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Property Title</label>
          <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" placeholder="e.g. Modern Apartment in Downtown" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Rent ($)</label>
            <input type="number" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" placeholder="1500" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Property Type</label>
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 appearance-none">
              <option>Apartment</option>
              <option>House</option>
              <option>Studio</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
          <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" placeholder="e.g. New York, NY" />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
          <textarea rows={4} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" placeholder="Describe the property..."></textarea>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Image URL</label>
          <input type="url" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" placeholder="https://example.com/image.jpg" />
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? 'Publishing...' : 'Publish Listing'}
        </Button>
      </form>
    </div>
  );
};
