import Link from 'next/link';
import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';

const defaultOptions = [
  { title: 'Button', path: '/' },
  { title: 'Button', path: '/' },
  { title: 'Button', path: '/' }
];

export default function Footer() {
  return (
    <footer className="inset-x-0 mt-2 w-full">
      <nav className="mx-8 flex items-center justify-between border-t border-solid border-[#C1C7CD] py-8">
        <div className="mt-5 text-sm sm:mt-0 sm:grow">
          CompanyName @ {new Date().getFullYear()}. All rights reserved.
        </div>
        <div className="flex grow flex-col flex-wrap justify-end space-y-3 text-sm sm:flex-row sm:items-center sm:space-x-8 sm:space-y-0">
          {defaultOptions.map((option) => (
            <Link key={option.title} href={option.path}>
              {option.title}
            </Link>
          ))}
        </div>
      </nav>
    </footer>
  );
}
