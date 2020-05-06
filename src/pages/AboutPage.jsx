import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { style, typography } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

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
      fontSize: 25,
      lineHeight: 1.5,
      whiteSpace: "normal",
      align: "left",
    },
    subtitle: {
      fontSize: 30,
      lineHeight: 1.5,
      whiteSpace: "normal",
      align: "left",
      textDecoration: "underline",
    },
    applekeywords: {
      fontSize: 25,
      lineHeight: 1.5,
      whiteSpace: "normal",
      color: "white",
      align: "left",
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      border: 0,
      borderRadius: 3,
      padding: '0 5px',
    },
    umkeywords: {
      fontSize: 25,
      lineHeight: 1.5,
      whiteSpace: "normal",
      color: "white",
      align: "left",
      background: 'linear-gradient(45deg, #007BA7 30%, #FFDB58 90%)',
      border: 0,
      borderRadius: 3,
      padding: '0 5px',
    },
  },
};

class AboutPage extends React.Component {
  render() {
    return (
      <NoSsr>
        <ThemeProvider theme={theme}>
          <Box
            width="800px"
            align="left"
            left="100px"
            top="100px"
            position='absolute'
            marginBottom='200px'>
            <Text variant="greeting" as="div">
              What's up! I am Letao Chen.
            </Text>
            <Text variant="normal">
              I am currently a rising senior at the&nbsp;
              <Text variant="umkeywords">University of Michigan</Text> majoring
              in Computer Science and Business. I look forward to pursue
              a career as a software engineer. In addition, I will be
              interning at <Text variant="applekeywords">Apple</Text>
              &nbsp;this summer! Hooooooraaaaaay! I will try my best, and we
              will see how it goes!<br />
              <br />
              <Text variant="subtitle" as="div">
                Me as a programmer
              </Text>
              In terms of my interests in computer science, I am interested in
              operating system and computer architecture. I finished Introduction
              to Operating Systems (EECS 482) at UofM and am currently
              taking Computer Architecture (ELE 475) from Princeton via Coursera.
              Hopefully I can finish ELE 475 before my internship starts.<br />
              <br />
              As a software engineer, I am proficient in C++, C, and Python, and
              am familiar with JavaScript. I have experience in system level
              programming, such as building a thread library, virtual memory
              pager, and file system. For web development, I have built
              dashboards to visualize data and websites like this page using
              React and Django. In addition, I have been working on some machine
              learning projects via research and school work, such as classifying
              low-back pain using SVM and classifying food images using CNN.<br />
              <br />
              <Text variant="subtitle" as="div">
                Me as a photographer and traveler
              </Text>
              I travel lot. I have been to every major city in Australia.
              My current plan is to visit every perfecture in Japan, and I am
              halfway through. I also take photos when I travel. Please click into
              my&nbsp;
              <Link href="/#/photo" target="_blank">
                Photo Page
              </Link>&nbsp;for more, or check out my&nbsp;
              <Link href="https://www.instagram.com/itsumo0628/" target="_blank">
                Instagram
              </Link> for more photos.<br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </Text>
          </Box>
        </ThemeProvider>
      </NoSsr>
    );
  }
}

export default AboutPage; 