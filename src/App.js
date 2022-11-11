import logo from "./logo.svg";
import "./App.css";
// import {} from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import SearchHotel from "./Components/SearchHotel";
import Hotel from "./Components/Admin/Hotels/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searchHotel" element={<SearchHotel />} />
        <Route path="/AdminHotel" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
