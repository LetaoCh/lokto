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
    time: {
      position: "absolute",
      width: "200px",
      height: "200px",
      border: "2px solid black",
      lineHeight: "200px",
      fontSize: "40px",
      fontWeight: "bold",
      textAlign: "center",
      transform: "rotateY(0deg) translateZ(100px)",
      background: "hsla(0, 100%, 50%, 0.7)",
    },
    shadow: {
      position: "absolute",
      width: "200px",
      height: "200px",
      border: "2px solid black",
      lineHeight: "200px",
      fontSize: "40px",
      fontWeight: "bold",
      textAlign: "center",
      transform: "rotateX(-90deg) translateZ(100px) translateY(-200px)",
      background: "hsla(300, 100%, 50%, 0.7)",
    },
    greeting: {
      fontSize: 45,
      lineHeight: 1.5,
      whiteSpace: "nowrap",
      align: "left",
    },
    normal: {
      fontSize: 20,
      lineHeight: 1.5,
      whiteSpace: "nowrap",
      align: "left",
    },
    keywords: {
      fontSize: 25,
      lineHeight: 1.5,
      whiteSpace: "nowrap",
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
          align="left"
          left="61.8%"
          bottom="19.1%"
          position="absolute">
          <Text variant="greeting" as="div">
            Hi there! I am Letao.&nbsp;
          </Text>
          <Text variant="normal">
            I am/was a&nbsp;
          </Text>
          <Text variant="keywords">
            Software Engineer
          </Text>
          <Text variant="normal">
            &nbsp;at Apple,&nbsp;
          </Text>
          <br />
          <Text variant="normal">
            a&nbsp;
          </Text>
          <Text variant="keywords">
            Student
          </Text>
          <Text variant="normal">
            &nbsp;from the University of Michigan, and
          </Text>
          <br />
          <Text variant="normal">
            a person that takes&nbsp;
          </Text>
          <Link href="/#/photo" target="_blank">
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
            href="https://drive.google.com/file/d/1Grr9UBIKYYcfTEhrdQ37n23G8SbZSZO0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            View Resume <i className="fa fa-download" aria-hidden="true"></i>
          </Button>
        </Box>
      </ThemeProvider>
    </NoSsr>
  );
}