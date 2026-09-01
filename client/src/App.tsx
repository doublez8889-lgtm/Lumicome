import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Archive from "./pages/archive";
import Editorial from "./pages/editorial";
import Network from "./pages/network";
import Protocol from "./pages/protocol";
import Contact from "./pages/contact";
import Vision from "./pages/vision";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import Press from "./pages/Press";
import Legal from "./pages/legal";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/archive" component={Archive} />
      <Route path="/projects" component={Archive} />
      <Route path="/editorial" component={Editorial} />
      <Route path="/network" component={Network} />
      <Route path="/protocol" component={Protocol} />
      <Route path="/contact" component={Contact} />
      <Route path="/vision" component={Vision} />
      <Route path="/about" component={About} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/press" component={Press} />
      <Route path="/team" component={Team} />
      <Route path="/legal" component={Legal} />
      <Route path="/services" component={Services} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
