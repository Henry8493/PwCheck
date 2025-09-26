import { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { generatePassword, getDefaultGeneratorOptions } from '@/lib/password-generator';
import { GeneratorOptions } from '@/types/password';
import { useToast } from '@/hooks/use-toast';

export function PasswordGenerator() {
  const [options, setOptions] = useState<GeneratorOptions>(getDefaultGeneratorOptions());
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    try {
      const password = generatePassword(options);
      setGeneratedPassword(password);
    } catch (error) {
      toast({
        title: 'Generation Error',
        description: error instanceof Error ? error.message : 'Failed to generate password',
        variant: 'destructive'
      });
    }
  };

  const handleCopy = async () => {
    if (!generatedPassword) return;
    
    try {
      await navigator.clipboard.writeText(generatedPassword);
      toast({
        title: 'Copied!',
        description: 'Password copied to clipboard'
      });
    } catch (error) {
      toast({
        title: 'Copy Failed',
        description: 'Could not copy password to clipboard',
        variant: 'destructive'
      });
    }
  };

  const handleLengthChange = (value: number[]) => {
    setOptions(prev => ({ ...prev, length: value[0] }));
  };

  const handleOptionChange = (key: keyof GeneratorOptions, value: boolean) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  // Generate initial password
  if (!generatedPassword) {
    handleGenerate();
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
      <h3 className="text-lg font-semibold mb-4">Secure Password Generator</h3>
      <div className="space-y-4">
        <div>
          <Label className="block text-sm font-medium mb-2">
            Password Length
          </Label>
          <Slider
            value={[options.length]}
            onValueChange={handleLengthChange}
            min={8}
            max={64}
            step={1}
            className="w-full"
            data-testid="length-slider"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>8</span>
            <span data-testid="current-length">{options.length}</span>
            <span>64</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="uppercase"
              checked={options.includeUppercase}
              onCheckedChange={(checked) => handleOptionChange('includeUppercase', !!checked)}
              data-testid="checkbox-uppercase"
            />
            <Label htmlFor="uppercase" className="text-sm">
              Uppercase Letters (A-Z)
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="lowercase"
              checked={options.includeLowercase}
              onCheckedChange={(checked) => handleOptionChange('includeLowercase', !!checked)}
              data-testid="checkbox-lowercase"
            />
            <Label htmlFor="lowercase" className="text-sm">
              Lowercase Letters (a-z)
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="numbers"
              checked={options.includeNumbers}
              onCheckedChange={(checked) => handleOptionChange('includeNumbers', !!checked)}
              data-testid="checkbox-numbers"
            />
            <Label htmlFor="numbers" className="text-sm">
              Numbers (0-9)
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="symbols"
              checked={options.includeSymbols}
              onCheckedChange={(checked) => handleOptionChange('includeSymbols', !!checked)}
              data-testid="checkbox-symbols"
            />
            <Label htmlFor="symbols" className="text-sm">
              Symbols (!@#$%^&*)
            </Label>
          </div>
        </div>

        <Collapsible
          open={showAdvanced}
          onOpenChange={setShowAdvanced}
          className="space-y-2 border-t border-border pt-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Advanced Options</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {showAdvanced ? 'Hide' : 'Show'}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="exclude-similar"
                checked={options.excludeSimilar}
                onCheckedChange={(checked) => handleOptionChange('excludeSimilar', !!checked)}
                data-testid="checkbox-exclude-similar"
              />
              <div className="space-y-1">
                <Label htmlFor="exclude-similar" className="text-sm">
                  Exclude Similar Characters
                </Label>
                <p className="text-xs text-muted-foreground">
                  Avoid characters like l, 1, O, and 0 to reduce confusion.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="exclude-ambiguous"
                checked={options.excludeAmbiguous}
                onCheckedChange={(checked) => handleOptionChange('excludeAmbiguous', !!checked)}
                data-testid="checkbox-exclude-ambiguous"
              />
              <div className="space-y-1">
                <Label htmlFor="exclude-ambiguous" className="text-sm">
                  Exclude Ambiguous Symbols
                </Label>
                <p className="text-xs text-muted-foreground">
                  Remove characters such as {`{`} {`}`} [ ] ( ) / and \ for cleaner passwords.
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Generated Password</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleGenerate}
              data-testid="button-regenerate"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
          <div className="relative">
            <Input
              type="text"
              value={generatedPassword}
              readOnly
              className="font-mono bg-muted pr-10"
              data-testid="generated-password"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1"
              onClick={handleCopy}
              data-testid="button-copy"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Button
          className="w-full"
          onClick={handleGenerate}
          data-testid="button-generate"
        >
          Generate New Password
        </Button>
      </div>
    </div>
  );
}
