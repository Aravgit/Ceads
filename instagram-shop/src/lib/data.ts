export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;  // This will be the path to your local image
  description: string;
}

// Simple product list - easy to update
export const products: Product[] = [
  {
    id: 'combo-1',
    name: 'Bead Keychain Combo Pack',
    price: 400.00,
    image: '/images/0.png',  // Combo pack image
    description: 'Complete set of all 4 bead keychains (Heart, Square, Circle, and Star)'
  },
  {
    id: 'heart-1',
    name: 'Heart Bead Keychain',
    price: 125.00,
    image: '/images/1.png',  // Heart keychain
    description: 'Beautiful heart-shaped bead keychain'
  },
  {
    id: 'square-1',
    name: 'Square Bead Keychain',
    price: 125.00,
    image: '/images/2.png',  // Square keychain
    description: 'Stylish square-shaped bead keychain'
  },
  {
    id: 'circle-1',
    name: 'Circle Bead Keychain',
    price: 125.00,
    image: '/images/3.png',  // Circle keychain
    description: 'Elegant circle-shaped bead keychain'
  },
  {
    id: 'star-1',
    name: 'Star Bead Keychain',
    price: 125.00,
    image: '/images/4.png',  // Star keychain
    description: 'Elegant star-shaped bead keychain'
  }
]; 