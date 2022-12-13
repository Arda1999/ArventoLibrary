import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./components/Login";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/Navbar";
import Kitaplar from "./components/Kitaplar";
import Yazarlar from "./components/Yazarlar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Kitaplar" element={<Kitaplar />} />
        <Route path="/Yazarlar" element={<Yazarlar />} />
      </Routes>
    </div>
  );
}

export default App;
