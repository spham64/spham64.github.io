import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Nuclear from "./pages/Nuclear";
import IncomeClassification from "./pages/IncomeClassification";
import Gold from "./pages/Gold";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/nuclear" element={<Nuclear />} />
        <Route
          path="/projects/classification"
          element={<IncomeClassification />}
        />
        <Route path="/projects/gold" element={<Gold />}></Route>
      </Routes>
    </HashRouter>
  );
}
