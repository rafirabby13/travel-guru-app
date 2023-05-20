import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context.js";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout()
      .then(() => {
        toast.success("signed out succesfully");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="backgorund-banner">
      <Navbar expand="lg">
        <Container className="navbar-container">
          <div>
            <Navbar.Brand href="#home">
              <Image style={{ height: "56px" }} src={logo}></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* <button className="search-bar"><FaSearch className="icon" style={{color:'white'}}></FaSearch> <input type="text" placeholder="Search your destination" /></button> */}
          </div>
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav-element">
                <button className="search-bar">
                  <FaSearch
                    className="icon"
                    style={{ color: "white" }}
                  ></FaSearch>{" "}
                  <input type="text" placeholder="Search your destination" />
                </button>
                <Nav.Link className="element-links" href="#home">
                  News
                </Nav.Link>
                <Nav.Link className="element-links" href="#link">
                  Destination
                </Nav.Link>
                <Nav.Link className="element-links" href="#link">
                  Blog
                </Nav.Link>
                <Nav.Link className="element-links" href="#link">
                  Contact
                </Nav.Link>
                {/* <Link to='/login'>
              <Button className="element-links" variant="warning">Login</Button>
              </Link> */}
              </Nav>
              <div>
                {user?.uid ? (
                  <>
                    <Button
                      onClick={handleSignOut}
                      className="element-links"
                      variant="warning"
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button className="element-links" variant="warning">
                        Login
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </Navbar.Collapse>
          </div>
          <div className="ml-4 user">
            {user?.photoURL ? (
              <>
                <Image src={user.photoURL}></Image>

                <b>
                  <p>{user?.email}</p>
                </b>
              </>
            ) : (
              <>
                <FaUserAlt></FaUserAlt>
                <b>
                  <p>{user?.email}</p>
                </b>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
