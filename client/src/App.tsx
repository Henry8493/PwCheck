import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
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
import PasswordBestPractices from "@/pages/password-best-practices";
import ComplianceGuides from "@/pages/compliance-guides";
import SecurityBlog from "@/pages/security-blog";
import HowItWorks from "@/pages/how-it-works";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import Contact from "@/pages/contact";
import UsePasswordManager from "@/pages/security/use-password-manager";
import EnableTwoFactorAuthentication from "@/pages/security/enable-two-factor-authentication";
import AvoidPasswordReuse from "@/pages/security/avoid-password-reuse";
import PasswordLengthMatters from "@/pages/security/password-length-matters";
import PasswordPoliciesRemoteWorkforce from "@/pages/security/password-policies-remote-workforce";
import ComplianceAuditChecklist from "@/pages/security/compliance-audit-checklist";
import PasswordFaq from "@/pages/password-faq";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/password-faq" component={PasswordFaq} />
      <Route path="/nist-password-checker" component={NISTPasswordChecker} />
      <Route path="/gdpr-password-compliance" component={GDPRPasswordCompliance} />
      <Route path="/iso27001-password-rules" component={ISO27001PasswordRules} />
      <Route path="/pci-dss-password-requirements" component={PCIDSSPasswordRequirements} />
      <Route path="/compliance-comparison" component={ComplianceComparison} />
      <Route path="/password-best-practices" component={PasswordBestPractices} />
      <Route path="/compliance-guides" component={ComplianceGuides} />
      <Route path="/security-blog" component={SecurityBlog} />
      <Route path="/security/use-password-manager" component={UsePasswordManager} />
      <Route
        path="/security/enable-two-factor-authentication"
        component={EnableTwoFactorAuthentication}
      />
      <Route path="/security/avoid-password-reuse" component={AvoidPasswordReuse} />
      <Route path="/security/password-length-matters" component={PasswordLengthMatters} />
      <Route
        path="/security/password-policies-remote-workforce"
        component={PasswordPoliciesRemoteWorkforce}
      />
      <Route path="/security/compliance-audit-checklist" component={ComplianceAuditChecklist} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
