import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto mt-16 text-center">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Payment Successful!</h1>
      <p className="text-slate-500 mb-8">Your rental request is now ACTIVE. You can leave a review after your stay is completed.</p>
      <Button onClick={() => navigate('/dashboard/tenant')} size="lg">Go to Dashboard</Button>
    </div>
  );
};
