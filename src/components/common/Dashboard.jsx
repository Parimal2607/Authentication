import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Nav,
  Button,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";


export const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  let navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("userData");
    navigate("/login");
    toast.success(`Logout Successfully`);
  };
  let authenticated;
  const Username = localStorage.getItem("userData");
  if (Username) {
    authenticated = JSON.parse(Username);
  }

  return (
    <>
      <header>
        <Navbar container="lg" expand="md" light>
          <div className="navbar-brand">
            <h3 className="mb-0">
              <Link className="nav-link" to="/dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="white" d="M12 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M9.553 19.106a1 1 0 0 1 1.338.44l.003.006l.034.058c.035.057.093.146.177.259c.169.225.44.536.832.85C12.71 21.337 13.993 22 16 22c2.007 0 3.29-.663 4.063-1.28c.393-.315.664-.626.832-.851a3.242 3.242 0 0 0 .211-.317l.004-.007a1 1 0 0 1 1.785.902v.001l-.002.002v.002l-.004.006l-.008.015a2.613 2.613 0 0 1-.1.175a4.96 4.96 0 0 1-.285.42a6.76 6.76 0 0 1-1.184 1.213C20.21 23.163 18.493 24 16 24c-2.493 0-4.21-.837-5.312-1.72a6.76 6.76 0 0 1-1.183-1.211a5.24 5.24 0 0 1-.386-.596l-.008-.015l-.003-.006l-.001-.003l-.001-.002a1 1 0 0 1 .447-1.341M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16" /></svg>
              </Link>
            </h3>
          </div> 
          <div className="d-flex gap-3 align-items-center">
          <UncontrolledDropdown
                className="d-md-none d-inline-block"
                inNavbar
                nav
              >
                <DropdownToggle caret nav>
                  <div className="avatar-data">
                    <div className="one">
                      {authenticated.fname.charAt(0)}
                    </div>
                  </div>
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag={Link} to="/profile">
                    Profile
                  </DropdownItem>
                  <DropdownItem onClick={() => logOut()}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            <div>
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </div>
          </button>
          </div>
         
         
         
          <Collapse navbar className={sidebarVisible ? "active" : ""}>
            <Nav className="ms-auto" navbar>
              <NavItem className="d-inline d-md-none sideheader-li">
                <div className="sideheader">
                  <div className="one">
                    <h3 className="mb-0">React</h3>
                  </div>
                  <div className="two">
                    <Button
                      className="btn-icon close-btn"
                      type="button"
                      onClick={() => setSidebarVisible(!sidebarVisible)}
                    >
                      <IoClose size="18" />
                    </Button>
                  </div>
                </div>
              </NavItem>
              <NavItem>
                <Link className="nav-link nav-hover" to="/product">
                  Product
                </Link>
              </NavItem>
              <NavItem >
                <Link className="nav-link nav-hover" to="/contact">
                  Contact
                </Link>
              </NavItem>
              <NavItem >
                <Link className="nav-link nav-hover" to="/about">
                  About
                </Link>
              </NavItem>
              <UncontrolledDropdown
                className="d-md-inline-block d-none"
                inNavbar
                nav
              >
                <DropdownToggle caret nav>
                  <div className="avatar-data">
                    <div className="one">
                      {authenticated.fname.charAt(0)}
                    </div>
                    <div className="two">{authenticated.fname}</div>
                  </div>
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag={Link} to="/profile">
                    Profile
                  </DropdownItem>
                  <DropdownItem onClick={() => logOut()}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
         
        </Navbar>
      </header>
    </>
  );
};

export default Dashboard;
