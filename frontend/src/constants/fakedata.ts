import { Role } from './schema'

export const userRoutes = [
  { name: 'Home', path: '/' },
  { name: 'message', path: '' }
]

export const userMessage = [
  { username: 'Wow', avatar: 'https://github.com/shadcn.png' },
  { username: 'YourName', avatar: 'https://github.com/shadcn.png' },
  { username: 'My', avatar: '' }
]

export const posts = [
  {
    name: 'Cozy Cottage Cozy Cottage Cozy Cottage Cozy Cottage',
    description:
      'A charming cottage surrounded by nature, perfect for a peaceful getaway.A charming cottage surrounded by nature, perfect for a peaceful getaway.',
    pictures: [
      'https://example.com/images/cozy_cottage_1.jpg',
      'https://example.com/images/cozy_cottage_2.jpg',
      'https://example.com/images/cozy_cottage_3.jpg',
      'https://example.com/images/cozy_cottage_4.jpg',
      'https://example.com/images/cozy_cottage_5.jpg'
    ],
    rate: 4.7,
    number_of_rates: 4540,
    payment_per_night: 150,
    number_of_beds: 3
  },
  {
    name: 'Modern Loft',
    description:
      'Stylish loft in the heart of the city with stunning skyline views.',
    pictures: [
      'https://example.com/images/modern_loft_1.jpg',
      'https://example.com/images/modern_loft_2.jpg',
      'https://example.com/images/modern_loft_3.jpg',
      'https://example.com/images/modern_loft_4.jpg',
      'https://example.com/images/modern_loft_5.jpg'
    ],
    rate: 4.9,
    number_of_rates: 85,
    payment_per_night: 200,
    number_of_beds: 2
  },
  {
    name: 'Beachfront Bungalow',
    description:
      'Relax in this beautiful bungalow just steps away from the beach.',
    pictures: [
      'https://example.com/images/beachfront_bungalow_1.jpg',
      'https://example.com/images/beachfront_bungalow_2.jpg',
      'https://example.com/images/beachfront_bungalow_3.jpg',
      'https://example.com/images/beachfront_bungalow_4.jpg',
      'https://example.com/images/beachfront_bungalow_5.jpg'
    ],
    rate: 4.5,
    number_of_rates: 60,
    payment_per_night: 175,
    number_of_beds: 1
  },
  {
    name: 'Rustic Farmhouse',
    description:
      'Experience farm life in this rustic farmhouse with modern amenities.',
    pictures: [
      'https://example.com/images/rustic_farmhouse_1.jpg',
      'https://example.com/images/rustic_farmhouse_2.jpg',
      'https://example.com/images/rustic_farmhouse_3.jpg',
      'https://example.com/images/rustic_farmhouse_4.jpg',
      'https://example.com/images/rustic_farmhouse_5.jpg'
    ],
    rate: 4.3,
    number_of_rates: 95,
    payment_per_night: 130,
    number_of_beds: 3
  },
  {
    name: 'Luxury Villa',
    description:
      'A lavish villa with a private pool and breathtaking views of the mountains.',
    pictures: [
      'https://example.com/images/luxury_villa_1.jpg',
      'https://example.com/images/luxury_villa_2.jpg',
      'https://example.com/images/luxury_villa_3.jpg',
      'https://example.com/images/luxury_villa_4.jpg',
      'https://example.com/images/luxury_villa_5.jpg'
    ],
    rate: 5.0,
    number_of_rates: 150,
    payment_per_night: 350,
    number_of_beds: 4
  }
]

export const roles: Role[] = [
  {
    _id: '1',
    name: 'Admin',
    description: 'Administrator with full access to the system.',
    generalRole: 'Management',
    allowedRoutes: [
      { path: '/dashboard', name: 'GET' },
      { path: '/users', name: 'GET' },
      { path: '/settings', name: 'GET' },
      { path: '/reports', name: 'GET' }
    ]
  },
  {
    _id: '2',
    name: 'Editor',
    description: 'Can edit content but not manage users.',
    generalRole: 'Content Management',
    allowedRoutes: [
      { path: '/dashboard', name: 'GET' },
      { path: '/content', name: 'GET' },
      { path: '/content/edit', name: 'POST' }
    ]
  },
  {
    _id: '3',
    name: 'Viewer',
    description: 'Can view content but cannot make changes.',
    generalRole: 'Read-Only',
    allowedRoutes: [
      { path: '/dashboard', name: 'GET' },
      { path: '/content', name: 'GET' }
    ]
  },
  {
    _id: '4',
    name: 'Moderator',
    description: 'Can moderate user-generated content.',
    generalRole: 'Content Moderation',
    allowedRoutes: [
      { path: '/dashboard', name: 'GET' },
      { path: '/moderate', name: 'GET' },
      { path: '/moderate/approve', name: 'POST' },
      { path: '/moderate/reject', name: 'POST' }
    ]
  }
]
