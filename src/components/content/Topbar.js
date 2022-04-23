import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, NavbarToggler } from "reactstrap";
import Burger from "../../assets/images/burger.svg";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded justify-content-between"
      expand="md"
    >
      <Button className="navbtn" onClick={toggleSidebar}>
        <img src={Burger} alt="Logo" />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <div>
        <Button className="mr-2 profilename">JD</Button>
        Jon Doe
      </div>
    </Navbar>
  );
};

export default Topbar;
