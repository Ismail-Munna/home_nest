import React, { useEffect, useState } from 'react';
import { Property } from '../../models/types';
import { api } from '../../models/api';
import { PropertyCard } from '../components/PropertyCard';
import { Link } from 'react-router-dom';
import { Search, MapPin, CheckCircle2, Key, ShieldCheck } from 'lucide-react';

export const Home = () => {
  const [featured, setFeatured] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getProperties().then(data => {
      setFeatured(data.slice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-24 md:py-32 relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '32px 32px' }}>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-500/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="text-blue-300">✨</span>
            <span className="text-sm font-semibold text-blue-100">Modern Rental Property Marketplace</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Find Your Perfect Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Home with Confidence
            </span>
          </h1>
          
          <p className="text-lg text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore verified rental listings, connect directly with landlords, and manage transparent rental requests seamlessly.
          </p>

          <div className="max-w-2xl mx-auto bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20 mb-8">
            <div className="bg-white rounded-xl flex items-center p-1">
              <div className="pl-4 text-slate-400">
                <MapPin className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Enter city (e.g. New York, Miami)..." 
                className="flex-1 px-4 py-3 bg-transparent text-slate-900 focus:outline-none placeholder:text-slate-400 font-medium"
              />
              <Link to="/properties">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors">
                  <Search className="w-4 h-4" /> Search Now
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-blue-200">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verified Landlords</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Secure Online Payment</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant Rental Requests</div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Discover Rentals</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Available Properties</h2>
            </div>
            <Link to="/properties" className="hidden md:block">
              <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-2.5 rounded-full font-semibold text-sm transition-colors flex items-center gap-2">
                View All Properties &rarr;
              </button>
            </Link>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3].map(i => <div key={i} className="h-96 bg-slate-200 animate-pulse rounded-2xl" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}

          <div className="mt-10 text-center md:hidden">
            <Link to="/properties">
              <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-full font-semibold transition-colors w-full">
                View All Properties &rarr;
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Renters & Landlords Choose RentNest</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 text-lg">
            Designed to streamline every step of the rental experience with modern security and real-time management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] text-left hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Search & Filters</h3>
              <p className="text-slate-500 leading-relaxed">
                Filter by city, location, price ranges, and property categories to find your ideal home fast.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] text-left hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Direct Rental Requests</h3>
              <p className="text-slate-500 leading-relaxed">
                Submit rental applications directly to property owners and track status updates live.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] text-left hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrated Payments</h3>
              <p className="text-slate-500 leading-relaxed">
                Complete booking payments securely using Stripe or SSLCommerz with instant confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
