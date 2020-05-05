var fs = require('fs');
var files = fs.readdirSync('./public/photo');
// console.log(files);
var sizeOf = require('image-size');

var photo = [];
files.forEach(myFunction);
function myFunction(pic, index) {
    let path = './public/photo/' + pic;
    let temp = {};
    temp['img'] = path;
    temp['title'] = path;
    temp['author'] = 'Letao Chen';
    let dimensions = sizeOf(path);
    if (dimensions.width <= dimensions.height) {
        temp['cols'] = 1;
    }
    else {
        temp['cols'] = Math.ceil(dimensions.width / dimensions.height);
    }
    photo.push(temp);
}
var dictstring = JSON.stringify(photo);
console.log(dictstring);
// fs.writeFile("photo.json", dictstring);