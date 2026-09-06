import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const PaymentCancel = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto mt-16 text-center">
      <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✕</div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Payment Cancelled</h1>
      <p className="text-slate-500 mb-8">Your transaction was cancelled or failed. You can try again from your dashboard.</p>
      <Button onClick={() => navigate('/dashboard/tenant')} variant="outline" size="lg">Back to Dashboard</Button>
    </div>
  );
};
