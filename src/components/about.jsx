import React, { Component } from 'react'
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { style, typography } from '@material-ui/system';

const variant = style({
  prop: 'variant',
  cssProperty: false,
  themeKey: 'typography',
});

// ⚠ Text is already defined in the global context:
// https://developer.mozilla.org/en-US/docs/Web/API/Text/Text.
const Text = styled.span`
  font-family: Helvetica;
  ${variant}
  ${typography}
`;

const theme = {
  typography: {
    h1: {
      fontSize: 30,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 25,
      lineHeight: 1.5,
    },
  },
};

export default function About() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <div>
          <Text variant="h1" as="div">
            variant=h1
          </Text>
          <Text variant="h1" fontWeight={300} as="div">
            fontWeight=300
          </Text>
          <Text variant="h2" as="div">
            variant=h2
          </Text>
        </div>
      </ThemeProvider>
    </NoSsr>
  );
}

// export default class About extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Ciao! <br />I'm Letao.</h1>
//         <h4>It is nice to meet you here!</h4>
//         <br />
//         <h5>I am currently a rising senior majoring in computer science 
//           <br />and business at the University of Michigan.</h5>
//         <Button variant="outline-primary">
//           <a
//             href="https://drive.google.com/file/d/1DJQPZrm4v3E9V_TOQB0ixAloCXzpRV5O/view?usp=sharing"
//             target="_blank"
//             rel="noopener noreferrer">
//             View Resume <i className="fa fa-download" aria-hidden="true"></i>
//           </a>
//         </Button>
//       </div>
//     )
//   }
// }