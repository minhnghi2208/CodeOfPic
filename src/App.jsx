// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/HomeComponent/Home";
import Memories from "./components/MemmoriesComponet/Memories";
import LastMail from "./components/lastMailComponet/LastMail";
import Login from "./components/LoginComponet/Login";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/lastMail" element={<LastMail />} />
      </Routes>
    </Router>
  );
}
