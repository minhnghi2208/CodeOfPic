import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomeComponent/Home";
import Memories from "./components/MemmoriesComponet/Memories";
import LastMail from "./components/lastMailComponet/lastMail";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/lastMail" element={<LastMail />} />
      </Routes>
    </Router>
  );
}
