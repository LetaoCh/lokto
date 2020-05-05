import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { style, typography } from '@material-ui/system';
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
      fontSize: 50,
      lineHeight: 1.5,
      whiteSpace: "normal",
      align: "left",
    },
    normal: {
      fontSize: 25,
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

class AboutPage extends React.Component {
  render() {
    return (
      <NoSsr>
      <ThemeProvider theme={theme}>
        <Box
          width="50%"
          align="left"
          left="10%"
          top="10%"
          position='absolute'>
          <Text variant="greeting" as="div">
            Ciao! I am Letao Chen.&nbsp;
          </Text>
          <Text variant="greeting" as="div">
            你好啊！我系陳樂韜。&nbsp;
          </Text>
          <Text variant="normal">
            Letao Chen (陈乐韬) is my legal name as I was born and raised in a 
            Cantonese family in Mainland China. However, my families usually call
            my Cantonese name, Chan Lok To (陳樂韜), at home. Therefore, you can
            see that sometimes I use Letao as my name, and sometimes I use Lokto.
            They are the same name but in different languages.<br/>
            <br/>
            I am currently a student at the University of Michigan majoring in
            Computer Science and Business Administration. I look forward to pursue
            a career as a software engineer. In addition, this summer, on June 1,
            I will be interning at Apple! Hooooooooooooraaaaaaaay! 
            I will try my best and we will see how it goes!<br/>
            <br/>
            In terms of my interest in computer science, I am interested in
            operating system and computer architecture. I finished 
            Introduction to Operating Systems (EECS 482) at UofM and am currently
            taking Computer Architecture (ELE 475) from Princeton via Coursera.
            Hopefully I can finish ELE 475 before my internship starts.&nbsp;
          </Text>
        </Box>
      </ThemeProvider>
    </NoSsr>
    );
  }
}

export default AboutPage; 