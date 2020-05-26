/*
 * Author: Saravanakumar
 * Description: This is reusable stateless function component and it used all inner page headers
 * TODO:  Make richer UI and move insline styles to CSS
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IStore } from '../types/store';
import { logout } from '../action/login';
import { Navbar, Nav } from 'react-bootstrap';
import '../assets/css/style.css';

const Header = () => {
  const { isLoggedIn, name } = useSelector((state: IStore) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) history.push('/');
  });

  const logoutuser = () => {
    dispatch(logout());
  };
  return (
    <>
      <Navbar
        id="main-nav"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: '#e0dcce', padding: '.1rem', height: '70px' }}
        variant="dark"
      >
        <Navbar.Brand href="#home" className="">
          <img
            src="https://img1.wsimg.com/isteam/ip/29a68ad5-785f-470c-8377-425da9230e6d/logo/591580ec-54d7-4a81-8e89-b266b9b27fe0.png"
            className="brand-text"
            title="AXION"
            alt="AXION"
            width="60px"
          />
          <h3 style={{ padding: '1rem 4rem' }}>Axion Group</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form> */}
            <div className="user-data">Welcome {name}</div>
            <Nav.Link className="logout" eventKey={2} href="#" onClick={logoutuser}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
