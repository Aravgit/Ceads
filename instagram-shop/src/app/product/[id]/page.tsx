'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { products } from '@/lib/data';

export default function ProductPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <Link href="/" className="mt-4 text-pink-600 hover:text-pink-500">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <Link
            href="/"
            className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-8"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to products
          </Link>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  ${product.price}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6 text-base text-gray-700">
                  {product.description}
                </div>
              </div>

              <div className="mt-8 flex">
                <button
                  type="button"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 