import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import photoData from './../photo.json';

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
  let columns = Math.floor((width / 1200) * 6);

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={columns}>
        {subphotoData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={process.env.PUBLIC_URL + tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}