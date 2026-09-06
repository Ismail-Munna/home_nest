import React from 'react';
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../controllers/useAuth';
import { Navbar } from '../components/Navbar';
import { cn } from '../../lib/utils';

interface Props {
  allowedRole?: 'TENANT' | 'LANDLORD' | 'ADMIN';
}

export const DashboardLayout: React.FC<Props> = ({ allowedRole }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900 font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 flex max-w-7xl w-full mx-auto items-stretch">
        <aside className="w-72 bg-white border-r border-slate-200 p-6 hidden md:flex flex-col gap-8">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Dashboard</h3>
            <nav className="space-y-2">
               <Link 
                 to={`/dashboard/${user.role.toLowerCase()}`}
                 className={cn(
                   "block px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                   location.pathname === `/dashboard/${user.role.toLowerCase()}`
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                 )}
               >
                 Overview
               </Link>
            </nav>
          </div>
        </aside>
        <section className="flex-1 p-6 md:p-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
