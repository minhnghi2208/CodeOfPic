import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomeComponent/Home";
import Memories from "./components/MemmoriesComponet/Memories";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
    </Router>
  );
}
