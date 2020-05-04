import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { style, typography } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from 'react-bootstrap/Button'

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
      color: "#e1ac01",
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
          left="61.8%"
          top="61.8%"
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
          <br />
          <Text variant="normal">
            a&nbsp;
          </Text>
          <Text variant="keywords">
            Student
          </Text>
          <Text variant="normal">
            &nbsp;from the University of Michigan,&nbsp;
          </Text>
          <br />
          <Text variant="normal">
            a person that takes&nbsp;
          </Text>
          <Link href="https://www.instagram.com/itsumo0628/" target="_blank">
            <Text variant="keywords">
              Photos
            </Text>
          </Link>
          <Text variant="normal">
            .&nbsp;
          </Text>
          <br />
          <br />
          <Button 
            variant="outline-dark"
            href="https://drive.google.com/file/d/1DJQPZrm4v3E9V_TOQB0ixAloCXzpRV5O/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer">
              View Resume <i className="fa fa-download" aria-hidden="true"></i>
          </Button>
        </Box>
      </ThemeProvider>
    </NoSsr>
  );
}