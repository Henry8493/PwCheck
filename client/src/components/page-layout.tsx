import { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { SiteHeader, type SiteHeaderProps } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

interface PageLayoutProps {
  children: ReactNode;
  wrapperClassName?: string;
  mainClassName?: string;
  headerProps?: SiteHeaderProps;
  mainProps?: HTMLAttributes<HTMLElement>;
}

export function PageLayout({
  children,
  wrapperClassName,
  mainClassName,
  headerProps,
  mainProps
}: PageLayoutProps) {
  return (
    <div className={cn('min-h-screen', wrapperClassName)}>
      <SiteHeader {...headerProps} />
      <main
        id="main-content"
        className={cn(mainClassName)}
        {...mainProps}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export default PageLayout;
