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
import CustomSvgIcon from "../components/common/CustomSvgIcon";


/**
 * Renders the Dashboard component.
 *
 * @return {JSX.Element} The rendered Dashboard component.
 */
export const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  let navigate = useNavigate();
  /**
   * Function to log out the user.
   *
   * @return {undefined} No return value.
   */
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
                <CustomSvgIcon icon="Emoji"/>
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
