import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';


export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
          {/* <ThemeToggle /> */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>Hover</TooltipTrigger>
              <TooltipContent>
                <div className="flex flex-col bg-white">
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                 Home
                </Link>
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  About Us
                </Link>
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </nav>
    </header>
  );
}
