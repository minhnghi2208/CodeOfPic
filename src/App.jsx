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
import Prepare from "./components/RepareComponet/prepare";
import NewYear from "./components/NewYearComponent/NewYear";
import Option from "./components/PageOptionComponet/Option";
import Game from "./newyearcomponets/GameComponent/Game";
import Valentine from "./valentinecomponents/Valentine";
import QuizGame from "./valentinecomponents/QuizGame";
import Boi from "./newyearcomponets/BoiComponent/Boi";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/option" element={<Option />} />
        <Route path="/game" element={<Game />} />
        {/* <Route path="/boi" element={<Boi />} /> */}
        <Route path="/valentine" element={<Valentine />} />
        <Route path="/Quiz" element={<QuizGame />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newyear" element={<NewYear />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/lastMail" element={<LastMail />} />
        <Route path="/prepare" element={<Prepare />} />
      </Routes>
    </Router>
  );
}
