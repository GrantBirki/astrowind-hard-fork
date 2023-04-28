// load and parse the json file images.json
import photos from './photos.json';

// Image gallery configuration on the galley page

const gallery = {
  // If the entire gallery section should be enabled or not
  enabled: true,

  // The gallery style
  layout: 'masonry',

  // Collection of images to display in the gallery
  photos: photos,
};

export default gallery;
