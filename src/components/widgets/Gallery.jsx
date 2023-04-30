// gallery reference: https://react-photo-album.com/
// ... https://github.com/igordanchenko/react-photo-album

import PhotoAlbum from 'react-photo-album';

export default function Gallery(props) {
  return (
    <div className="container mx-auto mb-20 px-5 py-2 lg:px-32 lg:pt-12">
      <PhotoAlbum
        layout={props.layout}
        photos={props.photos}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 2;
          return 3;
        }}
      />
    </div>
  );
}
