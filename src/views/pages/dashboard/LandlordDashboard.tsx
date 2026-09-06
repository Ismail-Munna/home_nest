import React from 'react';
import { useAuth } from '../../../controllers/useAuth';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../controllers/useToast';

export const LandlordDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleAction = (action: 'approve' | 'reject') => {
    showToast(`Request ${action}d successfully!`, action === 'approve' ? 'success' : 'info');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Landlord Dashboard</h1>
        <Button onClick={() => navigate('/dashboard/landlord/properties/new')}>+ Add Property</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Properties</p>
          <p className="text-4xl font-black text-slate-900">4</p>
        </div>
        <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Active Requests</p>
          <p className="text-4xl font-black text-blue-600">12</p>
        </div>
        <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Earnings</p>
          <p className="text-4xl font-black text-green-600">$12,450</p>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-bold mb-6 text-slate-900">Incoming Requests</h2>
        <div className="overflow-x-auto -mx-6 md:mx-0">
          <div className="inline-block min-w-full align-middle px-6 md:px-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50">
                  <th className="p-4 font-bold text-slate-600 text-sm">Tenant</th>
                  <th className="p-4 font-bold text-slate-600 text-sm">Property</th>
                  <th className="p-4 font-bold text-slate-600 text-sm">Date</th>
                  <th className="p-4 font-bold text-slate-600 text-sm text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Alice Smith</td>
                  <td className="p-4 text-slate-700">Modern Apartment in Downtown</td>
                  <td className="p-4 text-slate-500 text-sm">Oct 24, 2023</td>
                  <td className="p-4 flex gap-2 justify-end">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => handleAction('approve')}>Approve</Button>
                    <Button size="sm" variant="danger" onClick={() => handleAction('reject')}>Reject</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
