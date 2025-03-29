'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

export default function ReturnsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="pt-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
            <Link
              href="/"
              className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-8"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to home
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Return Policy</h1>
            
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Returns & Exchanges</h2>
                <p className="text-gray-900">
                  We want you to be completely satisfied with your purchase. If you&apos;re not happy with your order,
                  we accept returns within 30 days of delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Return</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-900">
                  <li>Log into your account and go to your order history</li>
                  <li>Select the item you want to return</li>
                  <li>Print the return shipping label</li>
                  <li>Pack the item in its original packaging</li>
                  <li>Drop off the package at any authorized shipping location</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process</h2>
                <p className="text-gray-900">
                  Once we receive your return, we&apos;ll inspect the item and process your refund within 5-7 business days.
                  The refund will be issued to the original payment method used for the purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conditions</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-900">
                  <li>Items must be unworn and in their original packaging</li>
                  <li>All tags must be attached</li>
                  <li>Items must be free of stains, odors, and damage</li>
                  <li>Sale items are final sale and cannot be returned</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-900">
                  If you have any questions about our return policy, please contact our customer service team at{' '}
                  <a href="mailto:support@ceads.com" className="text-pink-600 hover:text-pink-700">
                    support@instagramshop.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 