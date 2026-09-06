export type Role = 'TENANT' | 'LANDLORD' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  isBanned?: boolean;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: string;
  category?: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  amenities: string[];
  images: string[];
  landlordId: string;
  isAvailable: boolean;
}

export type RequestStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'ACTIVE' | 'COMPLETED';

export interface RentalRequest {
  id: string;
  propertyId: string;
  tenantId: string;
  status: RequestStatus;
  createdAt: string;
  property?: Property;
  tenant?: User;
}

export interface Payment {
  id: string;
  requestId: string;
  amount: number;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  date: string;
}
