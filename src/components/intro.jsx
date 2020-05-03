import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Intro extends Component {
  render() {
    return (
      <div>
        <h1>Ciao! <br />I'm Letao.</h1>
        <Button variant="outline-primary">
          <a
            href="https://drive.google.com/file/d/1DJQPZrm4v3E9V_TOQB0ixAloCXzpRV5O/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            View Resume <i className="fa fa-download" aria-hidden="true"></i>
          </a>
        </Button>
        <h1> Welcome to my page!
          <br />I always believe
          <br />love is hate, &
          <br />hate is love.
        </h1>
      </div>
    )
  }
}