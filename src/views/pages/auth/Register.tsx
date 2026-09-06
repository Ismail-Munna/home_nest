import React, { useState } from 'react';
import { useAuth } from '../../../controllers/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('TENANT');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const simulatedEmail = role === 'LANDLORD' ? `landlord_${email}` : email;
      await login(simulatedEmail);
      navigate(`/dashboard/${role.toLowerCase()}`);
    } catch (err) {
      alert('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Create an account</h2>
        <p className="text-slate-500 mt-2">Join RentNest today</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
          <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
          <input 
            type="email" 
            required 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">I want to...</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
          >
            <option value="TENANT">Rent a property</option>
            <option value="LANDLORD">List my properties</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
          <input type="password" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="••••••••" />
        </div>
        <Button className="w-full py-3 mt-2" type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Sign Up'}
        </Button>
      </form>
      <p className="mt-8 text-center text-sm text-slate-600">
        Already have an account? <Link to="/auth/login" className="text-blue-600 font-bold hover:underline">Log in</Link>
      </p>
    </div>
  );
};
