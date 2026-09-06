import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../controllers/useAuth';
import { Button } from './Button';
import { Building2, Home, Search, Sun } from 'lucide-react';

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm relative z-50">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
          <Building2 className="w-6 h-6" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-blue-600">RentNest</span>
      </Link>
      
      <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
        <Link to="/" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
          <Home className="w-4 h-4" /> Home
        </Link>
        <Link to="/properties" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
          <Search className="w-4 h-4" /> Find Properties
        </Link>
      </nav>

      <div className="flex items-center gap-6">
        <button className="text-slate-400 hover:text-slate-600 hidden md:block">
          <Sun className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-4 border-slate-200">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Role</span>
                <span className="text-sm font-semibold text-slate-900 capitalize">{user.role.toLowerCase()}</span>
              </div>
              <Link to={`/dashboard/${user.role.toLowerCase()}`}>
                <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-inner flex items-center justify-center overflow-hidden cursor-pointer" title="Dashboard">
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                    {user.name.substring(0, 2).toUpperCase()}
                  </div>
                </div>
              </Link>
              <button onClick={logout} className="text-sm font-semibold text-slate-600 hover:text-red-600">Logout</button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/auth/login" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                Log In
              </Link>
              <Link to="/auth/register">
                <Button className="rounded-full px-6 py-2.5 shadow-md shadow-blue-600/20">Get Started</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
