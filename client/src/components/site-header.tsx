import { ReactNode } from 'react';
import { Link } from 'wouter';
import { Shield } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SiteHeaderProps {
  className?: string;
  additionalBadges?: ReactNode;
}

export function SiteHeader({ className, additionalBadges }: SiteHeaderProps) {
  return (
    <nav className={cn('bg-white dark:bg-gray-900 shadow-sm border-b', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
            <Shield className="h-8 w-8" />
            <span className="text-xl font-bold" data-testid="app-title">
              Pw Check
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200" data-testid="privacy-badge">
              100% Private
            </Badge>
            {additionalBadges}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SiteHeader;
