import { Property, RentalRequest, User } from './types';

// Mock Data
const MOCK_PROPERTIES: Property[] = [
  {
    id: 'p1',
    title: 'Soluta accusamus fac',
    description: 'Dolor commodo possim. Beautiful apartment with great views.',
    price: 129,
    location: 'Praesentium odio dol, Voluptas dolor volup',
    type: 'Apartment',
    category: 'Bachelor Pad',
    beds: 15,
    baths: 20,
    sqft: 48,
    amenities: ['WiFi', 'Parking', 'Gym'],
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
    landlordId: 'u2',
    isAvailable: true,
  },
  {
    id: 'p2',
    title: 'Quia eaque occaecat',
    description: 'Voluptatem Voluptat. Great house in a quiet neighborhood.',
    price: 16,
    location: 'Autem ipsum alias la, Fugiat deserunt vol',
    type: 'House',
    category: 'duplex',
    beds: 99,
    baths: 25,
    sqft: 27,
    amenities: ['Pool', 'Garden', 'Garage'],
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
    landlordId: 'u2',
    isAvailable: true,
  },
  {
    id: 'p3',
    title: 'Ian007',
    description: 'goood. Amazing premium property.',
    price: 7800,
    location: 'boyra, boyra',
    type: 'House',
    category: 'premium',
    beds: 7,
    baths: 2,
    sqft: 6900,
    amenities: ['WiFi', 'Gym'],
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
    landlordId: 'u2',
    isAvailable: true,
  },
  {
    id: 'p4',
    title: 'gollamari',
    description: 'wow',
    price: 8900,
    location: 'gollamari, gollamari',
    type: 'House',
    category: 'village',
    beds: 4,
    baths: 3,
    sqft: 9000,
    amenities: ['WiFi', 'Gym'],
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
    landlordId: 'u2',
    isAvailable: true,
  },
  {
    id: 'p5',
    title: 'alif',
    description: 'yes good',
    price: 70000,
    location: 'sib bari, moilapota',
    type: 'House',
    category: 'village',
    beds: 8,
    baths: 3,
    sqft: 7000,
    amenities: ['WiFi'],
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
    landlordId: 'u2',
    isAvailable: true,
  },
  {
    id: 'p6',
    title: 'benten02',
    description: 'welcome',
    price: 3000,
    location: 'uk, new yourk',
    type: 'House',
    category: 'premium',
    beds: 2,
    baths: 1,
    sqft: 8000,
    amenities: ['WiFi'],
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
    landlordId: 'u2',
    isAvailable: true,
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  // Public
  getProperties: async (): Promise<Property[]> => {
    await delay(500);
    return MOCK_PROPERTIES;
  },
  getPropertyById: async (id: string): Promise<Property | undefined> => {
    await delay(500);
    return MOCK_PROPERTIES.find(p => p.id === id);
  },
  
  // Auth (Mock)
  login: async (email: string): Promise<User> => {
    await delay(500);
    // Mock login logic based on email
    let role: 'TENANT' | 'LANDLORD' | 'ADMIN' = 'TENANT';
    if (email.includes('landlord')) role = 'LANDLORD';
    if (email.includes('admin')) role = 'ADMIN';
    
    const user: User = { id: `u_${Date.now()}`, name: email.split('@')[0], email, role };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  },
  logout: async () => {
    await delay(200);
    localStorage.removeItem('user');
  },
  getCurrentUser: (): User | null => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Tenant
  submitRentalRequest: async (propertyId: string, tenantId: string): Promise<RentalRequest> => {
    await delay(500);
    return {
      id: `req_${Date.now()}`,
      propertyId,
      tenantId,
      status: 'PENDING',
      createdAt: new Date().toISOString(),
    };
  },

  // Landlord
  getLandlordProperties: async (landlordId: string): Promise<Property[]> => {
    await delay(500);
    return MOCK_PROPERTIES.filter(p => p.landlordId === landlordId);
  },
  
  // Admin
  getUsers: async (): Promise<User[]> => {
    await delay(500);
    return [
      { id: '1', name: 'Alice Tenant', email: 'alice@test.com', role: 'TENANT' },
      { id: '2', name: 'Bob Landlord', email: 'landlord@test.com', role: 'LANDLORD' },
      { id: '3', name: 'Admin User', email: 'admin@test.com', role: 'ADMIN' },
    ];
  }
};
