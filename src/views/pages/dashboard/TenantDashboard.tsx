import React from 'react';
import { useAuth } from '../../../controllers/useAuth';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export const TenantDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-slate-900">Welcome, {user?.name}</h1>
      
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-bold mb-6 text-slate-900">My Rental Requests</h2>
        <div className="overflow-x-auto -mx-6 md:mx-0">
          <div className="inline-block min-w-full align-middle px-6 md:px-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50">
                  <th className="p-4 font-bold text-slate-600 text-sm">Property</th>
                  <th className="p-4 font-bold text-slate-600 text-sm">Date</th>
                  <th className="p-4 font-bold text-slate-600 text-sm">Status</th>
                  <th className="p-4 font-bold text-slate-600 text-sm text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Modern Apartment in Downtown</td>
                  <td className="p-4 text-slate-500 text-sm">Oct 24, 2023</td>
                  <td className="p-4">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter flex items-center w-max gap-1.5 border border-blue-200">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span> Approved
                    </span>
                  </td>
                  <td className="p-4 text-right"><Button size="sm" onClick={() => navigate('/dashboard/tenant/requests/req_123/pay')}>Pay Now</Button></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Cozy Suburban House</td>
                  <td className="p-4 text-slate-500 text-sm">Oct 20, 2023</td>
                  <td className="p-4">
                    <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter flex items-center w-max gap-1.5 border border-amber-200">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span> Pending
                    </span>
                  </td>
                  <td className="p-4 text-right"><Button variant="outline" size="sm" disabled>Reviewing</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
