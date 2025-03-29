import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '@/lib/data';

interface ProductGridProps {
  initialProducts: Product[];
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
        !loading
      ) {
        loadMoreProducts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const loadMoreProducts = async () => {
    setLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create new products with unique IDs
    const newProducts = initialProducts.map((product, index) => ({
      ...product,
      id: `${product.id}-page-${page}-${index}`
    }));
    
    setProducts(prev => [...prev, ...newProducts]);
    setPage(prev => prev + 1);
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {loading && (
        <div className="col-span-full flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
        </div>
      )}
    </div>
  );
} 