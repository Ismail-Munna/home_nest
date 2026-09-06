/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './controllers/useAuth';
import { ToastProvider } from './controllers/useToast';
import { MainLayout } from './views/layouts/MainLayout';
import { DashboardLayout } from './views/layouts/DashboardLayout';
import { Home } from './views/pages/Home';
import { Properties } from './views/pages/Properties';
import { PropertyDetails } from './views/pages/PropertyDetails';
import { Login } from './views/pages/auth/Login';
import { Register } from './views/pages/auth/Register';
import { TenantDashboard } from './views/pages/dashboard/TenantDashboard';
import { LandlordDashboard } from './views/pages/dashboard/LandlordDashboard';
import { AdminDashboard } from './views/pages/dashboard/AdminDashboard';
import { AddProperty } from './views/pages/dashboard/AddProperty';
import { PaymentCheckout } from './views/pages/PaymentCheckout';
import { PaymentSuccess } from './views/pages/PaymentSuccess';
import { PaymentCancel } from './views/pages/PaymentCancel';

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="properties" element={<Properties />} />
              <Route path="properties/:id" element={<PropertyDetails />} />
              <Route path="auth/login" element={<Login />} />
              <Route path="auth/register" element={<Register />} />
              <Route path="payment/success" element={<PaymentSuccess />} />
              <Route path="payment/cancel" element={<PaymentCancel />} />
              <Route path="dashboard/tenant/requests/:id/pay" element={<PaymentCheckout />} />
            </Route>
            
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="tenant" element={<TenantDashboard />} />
              <Route path="landlord" element={<LandlordDashboard />} />
              <Route path="landlord/properties/new" element={<AddProperty />} />
              <Route path="admin" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
  );
}
