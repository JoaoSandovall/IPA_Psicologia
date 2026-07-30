import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from '@studio-freight/react-lenis';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Convenios from "./pages/Convenios";
import Quiz from "./pages/Quiz";

export default function App() {
  
  const scrollTo = (href: string) => {
    const targetId = href.replace("#", "");
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home scrollTo={scrollTo} />} />
          
            <Route path="/convenios" element={<Convenios onBack={() => window.history.back()} />} />
            
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Layout>
      </Router>
    </ReactLenis>
  );
}