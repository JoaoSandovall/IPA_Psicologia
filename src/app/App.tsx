// src/app/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizAvaliacao from './pages/Quiz';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/convenios" element={<Home />} />
        <Route path="/quiz" element={<QuizAvaliacao />} />
      </Routes>
    </Router>
  );
}