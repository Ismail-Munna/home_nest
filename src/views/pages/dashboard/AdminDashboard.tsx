import React from 'react';
import { useAuth } from '../../../controllers/useAuth';
import { Button } from '../../components/Button';

export const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-slate-900">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Users</p>
          <p className="text-4xl font-black text-slate-900">1,248</p>
        </div>
        <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Properties</p>
          <p className="text-4xl font-black text-slate-900">342</p>
        </div>
        <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Pending Requests</p>
          <p className="text-4xl font-black text-amber-600">56</p>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-xl font-bold mb-6 text-slate-900">User Management</h2>
        <div className="overflow-x-auto -mx-6 md:mx-0">
          <div className="inline-block min-w-full align-middle px-6 md:px-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50">
                  <th className="p-4 font-bold text-slate-600 text-sm">Name</th>
                  <th className="p-4 font-bold text-slate-600 text-sm">Email</th>
                  <th className="p-4 font-bold text-slate-600 text-sm">Role</th>
                  <th className="p-4 font-bold text-slate-600 text-sm text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Alice Smith</td>
                  <td className="p-4 text-slate-500 text-sm">alice@test.com</td>
                  <td className="p-4">
                    <span className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                      TENANT
                    </span>
                  </td>
                  <td className="p-4 text-right"><Button size="sm" variant="danger">Ban User</Button></td>
                </tr>
                <tr className="border-b border-red-100 bg-red-50/30 hover:bg-red-50/50 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Bad Actor</td>
                  <td className="p-4 text-slate-500 text-sm">bad@test.com</td>
                  <td className="p-4">
                    <span className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                      LANDLORD
                    </span>
                  </td>
                  <td className="p-4 text-right"><Button size="sm" variant="outline">Unban</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
