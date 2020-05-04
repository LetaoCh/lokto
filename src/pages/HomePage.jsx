// import React from 'react'
// import Button from 'react-bootstrap/Button'

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { style, typography } from '@material-ui/system';
import { positions } from '@material-ui/system';
import Box from '@material-ui/core/Box';

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
    greeting: {
      fontSize: 45,
      lineHeight: 1.5,
      whiteSpace: "normal",
      align: "left",
    },
    normal: {
      fontSize: 20,
      lineHeight: 1.5,
      whiteSpace: "normal",
      align: "left",
    },
    keywords: {
      fontSize: 25,
      lineHeight: 1.5,
      whiteSpace: "normal",
      color: "#FFCB05",
      align: "left",
      textDecoration: "underline",
    },
  },
};

export default function HomePage() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
      <Box 
        width={430}
        align="left"
        left="50%"
        top="55%"
        position='absolute'>
          <Text variant="greeting" as="div">
            Ciao! I am Letao.&nbsp;
          </Text>
          <Text variant="normal">
            I am a&nbsp;
          </Text>
          <Text variant="keywords">
            Software Engineer
          </Text>
          <Text variant="normal">
            ,&nbsp;
          </Text>
          <br/>
          <Text variant="normal">
            a&nbsp;
          </Text>
          <Text variant="keywords">
            Student
          </Text>
          <Text variant="normal">
            &nbsp;from the University of Michigan,&nbsp; 
          </Text>
          <br/>
          <Text variant="normal">
            a person that takes&nbsp;
          </Text>
          <Text variant="keywords">
            Photos
          </Text>
          <Text variant="normal">
            .&nbsp;
          </Text>
        </Box>
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