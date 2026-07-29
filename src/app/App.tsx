import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from '@studio-freight/react-lenis';
import Home from "./pages/Home";
import Quiz from './pages/Quiz';

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/convenios" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
}