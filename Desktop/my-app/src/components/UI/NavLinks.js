import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavLinks = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand='md'>
        <NavbarBrand href='/'>rokket</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/components/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                FAQs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavLinks;
