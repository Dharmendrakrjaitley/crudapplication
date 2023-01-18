import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddPlayer from "./components/AddPlayer";
import AllPlayers from "./components/AllPlayers";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import EditPlayer from "./components/EditPlayer";

function App() {
  return (
    <Routers>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all" element={<AllPlayers />}></Route>
        <Route path="/add" element={<AddPlayer />}></Route>
        <Route path="/edit/:id" element={<EditPlayer />}></Route>
      </Routes>
    </Routers>
  );
}

export default App;
