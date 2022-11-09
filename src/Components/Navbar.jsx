import "./styles/Navbar.css";

// import { FaBeer } from "react-icons/fa";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Portal,
} from "@chakra-ui/react";

// The default icon size is 1em (16px

import React from "react";
const Navbar = () => {
  const initialFocusRef = React.useRef();
  return (
    <div className="Navbar">
      <div className="navbarleft">
        <img src="/images/logo.png" alt="logo" />
        <div>
          {/* <FaBeer /> */}
          <Popover
            // initialFocusRef={initialFocusRef}
            // placement="bottom"
            // closeOnBlur={false}
            color=""
          >
            <PopoverTrigger>
              <Button bg="">
                More Travel <ChevronDownIcon w={5} h={4} />
              </Button>
            </PopoverTrigger>
            <PopoverContent ref={initialFocusRef}>
              <PopoverArrow />
              <PopoverCloseButton />

              <PopoverBody color="blackAlpha.800">Stays</PopoverBody>
              <PopoverBody color="blackAlpha.800">Flights</PopoverBody>
              <PopoverBody color="blackAlpha.800">Packages</PopoverBody>
              <PopoverBody color="blackAlpha.800">Cars</PopoverBody>
              <PopoverBody color="blackAlpha.800">Cruises</PopoverBody>
              <PopoverBody color="blackAlpha.800">Things To do</PopoverBody>
              <PopoverBody color="blackAlpha.800">Deals</PopoverBody>
              <PopoverBody color="blackAlpha.800">Group & Meetings</PopoverBody>
              <PopoverBody color="blackAlpha.800">Travel Blog</PopoverBody>
            </PopoverContent>
          </Popover>{" "}
        </div>
      </div>
      <div className="navbarrigth">
        <div>List your Property</div>
        <div>Support</div>
        <div>Trips</div>
        <div>
          <Popover size={25}>
            <PopoverTrigger>
              <Button bg={""}>Sign In</Button>
            </PopoverTrigger>
            {/* <Portal> */}
            <PopoverContent id="pop">
              <PopoverArrow />
              {/* <PopoverHeader>Header</PopoverHeader> */}
              <PopoverCloseButton />
              <PopoverBody></PopoverBody>
              <Button colorScheme=" blue">User </Button>
              <Button colorScheme="blue">Admin </Button>
              {/* <PopoverFooter>This is the footer</PopoverFooter> */}
            </PopoverContent>
            {/* </Portal> */}
          </Popover>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
