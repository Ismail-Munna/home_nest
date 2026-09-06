import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useToast } from '../../controllers/useToast';

export const PaymentCheckout = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate Stripe/SSLCommerz redirect
    setTimeout(() => {
      setLoading(false);
      showToast('Payment successful!', 'success');
      navigate('/payment/success');
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Secure Checkout</h2>
        <p className="text-slate-500 mt-2">Complete payment for request #{id}</p>
      </div>

      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-600">Rent Amount</span>
          <span className="font-bold text-slate-900">$1,500.00</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-600">Platform Fee</span>
          <span className="font-bold text-slate-900">$25.00</span>
        </div>
        <div className="border-t border-slate-200 my-2 pt-2 flex justify-between items-center">
          <span className="font-bold text-slate-900">Total Due</span>
          <span className="font-black text-xl text-blue-600">$1,525.00</span>
        </div>
      </div>

      <form onSubmit={handlePay} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Card Number (Mock)</label>
          <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" placeholder="4242 4242 4242 4242" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Expiry</label>
            <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" placeholder="MM/YY" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">CVC</label>
            <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" placeholder="123" />
          </div>
        </div>
        <Button className="w-full py-3 mt-4" size="lg" type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay $1,525.00'}
        </Button>
      </form>
    </div>
  );
};
