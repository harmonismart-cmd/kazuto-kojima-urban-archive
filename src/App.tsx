import { Switch, Route, Router as WouterRouter } from "wouter";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import ConceptIndex from "@/pages/ConceptIndex";
import ConceptDetail from "@/pages/ConceptDetail";
import FrameworkIndex from "@/pages/FrameworkIndex";
import FrameworkDetail from "@/pages/FrameworkDetail";
import Indicators from "@/pages/Indicators";
import ProjectIndex from "@/pages/ProjectIndex";
import ProjectDetail from "@/pages/ProjectDetail";
import EssayIndex from "@/pages/EssayIndex";
import EssayDetail from "@/pages/EssayDetail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/concept" component={ConceptIndex} />
          <Route path="/concept/:id" component={ConceptDetail} />
          <Route path="/framework" component={FrameworkIndex} />
          <Route path="/framework/:id" component={FrameworkDetail} />
          <Route path="/indicators" component={Indicators} />
          <Route path="/projects" component={ProjectIndex} />
          <Route path="/projects/:id" component={ProjectDetail} />
          <Route path="/essays" component={EssayIndex} />
          <Route path="/essays/:id" component={EssayDetail} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
