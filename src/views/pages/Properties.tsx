import React, { useEffect, useState } from 'react';
import { api } from '../../models/api';
import { Property } from '../../models/types';
import { PropertyCard } from '../components/PropertyCard';
import { Button } from '../components/Button';

export const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    api.getProperties().then(data => {
      setProperties(data);
      setLoading(false);
    });
  }, []);

  const filtered = properties.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()) || p.location.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-72 bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-8 shrink-0 self-start">
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Advanced Filter</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold block mb-2 text-slate-600">Search</label>
              <input 
                type="text" 
                placeholder="Title or location..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-2 text-slate-600">Price Range</label>
              <div className="flex items-center gap-2">
                <input type="text" placeholder="$Min" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-center" />
                <span className="text-slate-400">-</span>
                <input type="text" placeholder="$Max" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-center" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-auto p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-xs text-blue-800 font-medium leading-relaxed">
            Looking for more specific options? Try our detailed search filters.
          </p>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Discover Properties</h1>
            <p className="text-slate-500">Showing {filtered.length} premium listings</p>
          </div>
          <div className="hidden md:flex bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button className="px-4 py-1.5 text-sm font-semibold bg-white rounded-md shadow-sm text-slate-900">Grid</button>
            <button className="px-4 py-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">List</button>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1,2,3,4].map(i => <div key={i} className="h-64 bg-slate-200 animate-pulse rounded-2xl" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
            {filtered.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-20 text-slate-500">
                No properties found matching your criteria.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
