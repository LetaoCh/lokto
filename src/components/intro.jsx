import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
      <div>
        <h1>Ciao! <br />I'm Letao.</h1>
        <p><a className="btn btn-primary btn-learn"
          href="https://drive.google.com/file/d/1DJQPZrm4v3E9V_TOQB0ixAloCXzpRV5O/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          View Resume
          <span class="fa-stack">
            <i class="fa fa-download" aria-hidden="true"></i>
          </span>
        </a>
        </p>
        <h1>I am Currently 
          <br />Working on This Page. 
          <br />It'll Be Awesome 
          <br />if U Can
          <br />Come Back
          <br />& Check it Out Later!
        </h1>
      </div>
    )
  }
}