import React from 'react';
import { Building2, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#0c1322] text-slate-300 py-16 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">RentNest</span>
          </Link>
          <p className="text-slate-400 leading-relaxed mb-6">
            Find & List Rental Properties with Ease. RentNest connects verified tenants, property landlords, and managers with seamless booking and moderation tools.
          </p>
          <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer w-fit">
            <Mail className="w-5 h-5" />
            <span>support@rentnest.com</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-sm uppercase mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/properties" className="hover:text-blue-400 transition-colors">Browse Properties</Link></li>
            <li><Link to="/auth/login" className="hover:text-blue-400 transition-colors">Login</Link></li>
            <li><Link to="/auth/register" className="hover:text-blue-400 transition-colors">Register Account</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-sm uppercase mb-6">Portal Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/dashboard/tenant" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Tenant Dashboard</Link></li>
            <li><Link to="/dashboard/landlord" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Landlord Dashboard</Link></li>
            <li><Link to="/dashboard/admin" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Admin Portal</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-bold tracking-widest text-sm uppercase mb-6">Stay Connected</h4>
          <p className="text-slate-400 mb-4 text-sm leading-relaxed">
            Subscribe for real-time listing notifications, price updates, and tenancy guides.
          </p>
          <div className="flex items-center bg-[#141e33] p-1 rounded-xl border border-slate-800 focus-within:border-blue-500 transition-colors">
            <input 
              type="email" 
              placeholder="Enter email address..." 
              className="bg-transparent border-none outline-none px-4 py-2 w-full text-white placeholder:text-slate-500 text-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex-shrink-0">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};