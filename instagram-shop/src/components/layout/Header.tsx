import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative flex items-center h-20">
          <div className="absolute left-0">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center h-full py-2">
              <Image
                src="/logo.svg"
                alt="Ceads Logo"
                width={60}
                height={60}
                className="h-15 w-auto"
              />
            </Link>
          </div>
          
          <div className="absolute right-0 w-10" /> {/* Spacer for alignment */}
        </div>
      </div>
    </header>
  );
} 