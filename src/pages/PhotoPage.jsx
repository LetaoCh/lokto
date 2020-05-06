import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import photoData from './../photo.json';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { style, typography } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "70%",
    height: "70%",
  },
}));

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
  },
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export default function PhotoPage() {
  const classes = useStyles();

  // Randomly choose 50 images from the photoData
  shuffle(photoData);
  const subphotoData = photoData.slice(0, 50);

  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let columns = Math.floor((width / 1200) * 8);

  return (
    <div>
      <NoSsr>
        <ThemeProvider theme={theme}>
          <Box
            width="900px"
            align="left"
            left="15%"
            position="relative"
            marginTop='50px'
            marginBottom='10px'>
            <Text variant="greeting" as="div">
              Photo
            </Text>
            <Text variant="normal">
              I take photos but I won't call myself a photographer. I think
              photography is not about the cameras I use, the techniques I apply,
              or the places I visit. It is about the mood, about self satisfaction.
              The most important thing is that I am standing at the place,
              admiring the view, and then taking the shot. My photos are special
              to me becasue they were taken by me at the places I love. I shall never
              be a photographer. I just want to be a person that takes photos.<br />
              <br />
              By the way, if you refresh the page, new photos will be populated.<br />
              <br />
            </Text>
          </Box>
        </ThemeProvider>
      </NoSsr>
      <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList} cols={columns}>
          {subphotoData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={process.env.PUBLIC_URL + tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}