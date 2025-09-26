import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import NISTPasswordChecker from "@/pages/nist-password-checker";
import GDPRPasswordCompliance from "@/pages/gdpr-password-compliance";
import ISO27001PasswordRules from "@/pages/iso27001-password-rules";
import PCIDSSPasswordRequirements from "@/pages/pci-dss-password-requirements";
import ComplianceComparison from "@/pages/compliance-comparison";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/nist-password-checker" component={NISTPasswordChecker} />
      <Route path="/gdpr-password-compliance" component={GDPRPasswordCompliance} />
      <Route path="/iso27001-password-rules" component={ISO27001PasswordRules} />
      <Route path="/pci-dss-password-requirements" component={PCIDSSPasswordRequirements} />
      <Route path="/compliance-comparison" component={ComplianceComparison} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
