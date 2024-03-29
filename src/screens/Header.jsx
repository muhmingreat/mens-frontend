import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../Store';
import axios from 'axios';
import { getError } from '../utils';
import { toast } from 'react-toastify';
import { Badge, Button, Container, Nav, NavDropdown, Navbar, ToastContainer } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import SearchBox from '../components/SearchBox';

const Header = () => {
 const { state, dispatch: ctxDispatch } = useContext(Store);
 const { fullBox, cart, userInfo } = state;

 const signoutHandler = () => {
   ctxDispatch({ type: "USER_SIGNOUT" });
   localStorage.removeItem("userInfo");
   localStorage.removeItem("shippingAddress");
   localStorage.removeItem("paymentMethod");
   window.location.href = "/signin";
 };
 const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
 const [categories, setCategories] = useState([]);

 useEffect(() => {
   const fetchCategories = async () => {
     try {
       const { data } = await axios.get(`/api/products/categories`);
       setCategories(data);
     } catch (err) {
       toast.error(getError(err));
     }
   };
   fetchCategories();
 }, []);
  return (
    <div
        className={
          sidebarIsOpen
            ? fullBox
              ? "site-container active-cont d-flex flex-column full-box w-100vw"
              : "site-container active-cont d-flex flex-column"
            : fullBox
            ? "site-container d-flex flex-column full-box"
            : "site-container d-flex flex-column w-100vw"
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
      <header
        style={{ width: "100vw", position: "sticky", top: 0, zIndex: "1" }}
      >
        <Navbar bg="primary" variant="light" expand="lg">
          <Container>
            <Button variant="" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
              <i className="fas fa-bars"></i>
            </Button>
            <LinkContainer to="/home">
              <Navbar.Brand>
                {" "}
                <h1 className="heading">ABS Style Spot</h1>
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto  w-100  justify-content-end">
                <Link to="/cart" className="nav-link">
                  <span>
                    <i
                      className="bi bi-cart4"
                      style={{ color: "#fff", fontSize: "3rem" }}
                    ></i>
                  </span>
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>

                <nav className="info">
                  {" "}
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer
                        to="/orderhistory"
                        style={{ marginLeft: "50px" }}
                      >
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        <p>Sign Out</p>
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      <nav className="signin">Sign In</nav>
                    </Link>
                  )}{" "}
                </nav>
                <nav className="info">
                  {" "}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <nav className="sub-header">
          <SearchBox />
        </nav>
      </header>
      <div
        className={
          sidebarIsOpen
            ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column w-100vh"
            : "side-navbar d-flex justify-content- between flex-wrap flex-column w-100vh "
        }
      >
        <div className="sticky">
          <Nav className="flex-column text-white w-100 p-5">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories &&
              categories.map((category) => (
                <Nav.Item key={category.key}>
                  <LinkContainer
                    to={{ pathname: "/search", search: `category=${category}` }}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    <Nav.Link>{category}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              ))}
          </Nav>
        </div>
      </div>
      
    </div>
  );
}

export default Header