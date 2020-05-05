import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>Letao Chen</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/lokto/#/">Home</Nav.Link>
            <Nav.Link href="/lokto/#/about">About</Nav.Link>
            <Nav.Link href="/lokto/#/experience">Experience</Nav.Link>
            <Nav.Link href="/lokto/#/photography">Photography</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1DJQPZrm4v3E9V_TOQB0ixAloCXzpRV5O/view?usp=sharing"
              target="_blank">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
