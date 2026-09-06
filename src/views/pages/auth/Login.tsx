import React, { useState } from 'react';
import { useAuth } from '../../../controllers/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email);
      // Determine dashboard based on user role (simulated by email content for now)
      if (email.includes('landlord')) navigate('/dashboard/landlord');
      else if (email.includes('admin')) navigate('/dashboard/admin');
      else navigate('/dashboard/tenant');
    } catch (err) {
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back</h2>
        <p className="text-slate-500 mt-2">Log in to your RentNest account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email (Role simulation)</label>
          <input 
            type="email" 
            required 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tenant@test.com / landlord@test.com"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
          <input 
            type="password" 
            required 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" 
            placeholder="••••••••"
          />
        </div>
        <Button className="w-full py-3 mt-2" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Sign In'}
        </Button>
      </form>
      <p className="mt-8 text-center text-sm text-slate-600">
        Don't have an account? <Link to="/auth/register" className="text-blue-600 font-bold hover:underline">Register</Link>
      </p>
    </div>
  );
};
