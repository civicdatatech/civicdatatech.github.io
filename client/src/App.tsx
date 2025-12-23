//// filepath: /Users/virginiadooley/Documents/civicdataproject/client/src/App.tsx
import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { GetInvolved } from "@/pages/GetInvolved";
import { Strategy } from "@/pages/Strategy";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

function AppRouter() {
  return (
    <WouterRouter>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/get-involved" component={GetInvolved} />
            <Route path="/strategy" component={Strategy} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;