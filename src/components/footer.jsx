import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="bottom" bg="light" variant="light">
          <Nav className="ml-auto">
            <Nav.Link href="mailto:lokto@umich.edu">Email <i className="fas fa-envelope"></i></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/letao-ch/" target="_blank">LinkedIn <i className="fab fa-linkedin-in"></i></Nav.Link>
            <Nav.Link href="https://github.com/LetaoCh" target="_blank">GitHub <i className="fab fa-github"></i></Nav.Link>
            <Nav.Link href="https://www.instagram.com/itsumo0628/" target="_blank">Instagram <i className="fab fa-instagram"></i></Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}