import { Shield, Lock, Hash, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function BreachCheckingExplainer() {
  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800" data-testid="breach-explainer-card">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-blue-600 rounded-full">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            How Breach Checking Works
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Using k-Anonymity to protect your privacy
          </p>
        </div>

        {/* Step-by-step visual flow */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Step 1 */}
          <div className="relative" data-testid="step-1">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800 h-full">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                  <Hash className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">
                  Step 1: Hash Locally
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Your password is hashed with SHA-1 <strong>in your browser</strong>
                </p>
                <div className="mt-3 p-2 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs break-all text-gray-700 dark:text-gray-300">
                  5BAA6...F4C
                </div>
              </div>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative" data-testid="step-2">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800 h-full">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                  <Shield className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">
                  Step 2: Send 5 Characters
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Only the <strong>first 5 characters</strong> of the hash are sent
                </p>
                <div className="mt-3 p-2 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs text-gray-700 dark:text-gray-300">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">5BAA6</span>
                  <span className="text-gray-400">•••••</span>
                </div>
              </div>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative" data-testid="step-3">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800 h-full">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">
                  Step 3: Check Locally
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Results checked <strong>in your browser</strong> - never sent to us
                </p>
                <div className="mt-3 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy guarantee */}
        <div className="bg-green-50 dark:bg-green-950 border-2 border-green-300 dark:border-green-700 rounded-lg p-4" data-testid="privacy-guarantee">
          <div className="flex items-start gap-3">
            <Lock className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">
                Your Password NEVER Leaves Your Browser
              </h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                The Have I Been Pwned API receives only a tiny fragment of your password's hash. 
                Even if intercepted, this fragment cannot reveal your password. The comparison happens 
                entirely in your browser using client-side JavaScript.
              </p>
            </div>
          </div>
        </div>

        {/* Technical details */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
          <p>
            This technique is called <strong>k-anonymity</strong> and is recommended by security experts worldwide.
            {' '}
            <a 
              href="https://haveibeenpwned.com/API/v3#PwnedPasswords" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              data-testid="link-hibp-docs"
            >
              Learn more about the API →
            </a>
          </p>
        </div>
      </div>
    </Card>
  );
}
