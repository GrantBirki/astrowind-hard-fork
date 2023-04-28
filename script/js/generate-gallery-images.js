const fs = require('fs');
const sizeOf = require('image-size');

const baseDir = 'public';
const galleryDir = `${baseDir}/assets/gallery`;
const outputConfigFile = 'src/config/pages/gallery/photos.json';

const images = fs.readdirSync(galleryDir);

// loop through all the images in the public/assets folder
var imgArray = [];
images.map((image, index) => {
  // only use .jpg / .jpeg / .png images
  if (!image.match(/\.(jpg|jpeg|png)$/)) {
    return;
  }

  // get the img height and width
  const dimensions = sizeOf(`${galleryDir}/${image}`);

  // create the image object
  const img = {
    key: index,
    alt: image,
    src: `${galleryDir.replace(baseDir, '')}/${image}`,
    width: dimensions.width,
    height: dimensions.height,
  };

  // push the image object to the array
  imgArray.push(img);
});

// write the array to a json file
fs.writeFileSync(outputConfigFile, JSON.stringify(imgArray, null, 2));

// append a new line to the end of the file
fs.appendFileSync(outputConfigFile, '\n');

console.log('Images generated successfully');
