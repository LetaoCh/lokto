// import React from 'react'
// import Button from 'react-bootstrap/Button'

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
      fontSize: 25,
      lineHeight: 1.5,
      whiteSpace: "normal",
    },
    h2: {
      fontSize: 25,
      lineHeight: 1.5,
      whiteSpace: "normal",
      color: "#FFCB05",
    },
  },
};

export default function HomePage() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <div>
          <Text variant="h1" as="div">
            Ciao! I am Letao.&nbsp;
          </Text>
          <Text variant="h1">
            I am a&nbsp;
          </Text>
          <Text variant="h2">
            Software Engineer,&nbsp;
          </Text>
          <Text variant="h1">
            a&nbsp;
          </Text>
          <Text variant="h2">
            Student&nbsp;
          </Text>
          <Text variant="h1">
            from the University of Michigan,&nbsp; 
          </Text>
          <Text variant="h1">
            a&nbsp;
          </Text>
          <Text variant="h2">
            person that take Photos.&nbsp;
          </Text>
        </div>
      </ThemeProvider>
    </NoSsr>
  );
}


// export default function HomePage() {
//   return (
//     <div>
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
//   )
// }