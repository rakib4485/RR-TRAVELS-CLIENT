import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/1.png";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContexts);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar className="fixed-top nav-bg" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} style={{ width: "150px" }} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link className="nav-link">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/packages">Tour Packages</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/blog">Blog</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="">
              {user?.uid ? (
                <Link>
                  <span>{user?.displayName}</span>
                </Link>
              ) : (
                <>
                  <Link to="/login">Log In</Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="">
              {user? (
                <>
                {
                  user?.photoURL ? (<Image
                    roundedCircle
                    style={{ height: "30px" }}
                    src={user?.photoURL}
                  />) : (<FaUser></FaUser>)
                }
                  

                  <Button
                    className="ms-2 fw-semibold"
                    variant="light"
                    size="sm"
                    onClick={handleLogOut}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
