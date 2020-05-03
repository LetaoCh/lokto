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
          View Resume <i class="fa fa-download" aria-hidden="true"></i>
        </a>
        </p>
        <h1>I am currently 
          <br />working on the page. 
          <br />It'll be awesome 
          <br />if you can come back
          <br />& check it out later!
        </h1>
      </div>
    )
  }
}