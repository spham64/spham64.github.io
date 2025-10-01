import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Nuclear from "./pages/Nuclear";
import IncomeClassification from "./pages/IncomeClassification";

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
      </Routes>
    </HashRouter>
  );
}
