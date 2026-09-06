import React from 'react';
import { Property } from '../../models/types';
import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Maximize } from 'lucide-react';

interface Props {
  property: Property;
}

export const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="bg-white rounded-[20px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
      <div className="relative h-[240px] w-full overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {property.isAvailable && (
            <span className="bg-[#10b981] text-white px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase">
              AVAILABLE
            </span>
          )}
          {property.category && (
            <span className="bg-white text-slate-700 px-2.5 py-1 rounded-md text-xs font-semibold shadow-sm">
              {property.category}
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg flex items-baseline gap-1 shadow-sm">
          <span className="font-black text-lg">${property.price.toLocaleString()}</span>
          <span className="text-xs text-slate-300 font-medium">/ mo</span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-blue-600 mb-3 text-sm font-medium">
          <MapPin className="w-4 h-4" />
          <span className="truncate">{property.location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{property.title}</h3>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2">{property.description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between text-slate-500 text-sm py-4 border-t border-slate-100 mb-2">
            <div className="flex items-center gap-2">
              <BedDouble className="w-4 h-4" />
              <span>{property.beds || 0} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-4 h-4" />
              <span>{property.baths || 0} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="w-4 h-4" />
              <span>{property.sqft || 0} sqft</span>
            </div>
          </div>
       
<Link to={`/properties/${property.id}`} className="block">
            <button className="w-full bg-[#0c1322] hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold text-sm transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};