import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Footer from './footer';

export default function PageContainer({
  children,
  scrollable = false
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className="h-[calc(100dvh-52px)]">
          <div className="p-4 md:px-8">{children}</div>
        </ScrollArea>
      ) : (
        <div className="p-4 md:px-8">{children}</div>
      )}
    </>
  );
}
