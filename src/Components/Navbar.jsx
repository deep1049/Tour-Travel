import "./styles/Navbar.css";
import { useNavigate } from "react-router-dom";
// import ChevronDownIcon from "@chakra-ui/icons";
// import { FaBeer } from "react-icons/fa";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import React from "react";
const Navbar = () => {
  const navigateTo = useNavigate();
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };
  return (
    <div className="Navbar">
      <div className="navbarleft">
        <img src="/images/logo.png" alt="logo" />
        <div>
          <select value="">
            <option value="" disabled selected hidden>
              More Travel
            </option>
            <option value="Option 2">Stays</option>
            <option value="Option 3"> Flights</option>
            <option value="Option 4">Packages</option>
            <option value="Option 5">Cars</option>
            <option value="Option 6">Cruises</option>
          </select>
        </div>
      </div>
      <div className="navbarrigth">
        <div>List your Property</div>
        <div>Support</div>
        <div>Trips</div>
        <div onClick={() => GoTo("/signup")}>Sign In</div>
      </div>
    </div>
  );
};
export default Navbar;
