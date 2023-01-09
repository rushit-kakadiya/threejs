import React from 'react';
import { Container, Image, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { router } from '../utils/router';

const Header = () => {
  return (
    <Navbar collapseOnSelect bg='light' expand='sm' sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <Image src='/favicon.ico' alt='' height='35px' width='35px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' data-bs-toggle='collapse' data-bs-target='#navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto' navbarScroll>
            {router.map(({ path }) => (
              <NavLink eventKey={path} as={Link} to={path} key={path}>
                {path?.length > 1 ? path[1]?.toUpperCase() + path?.substring(2) : 'Home'}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
