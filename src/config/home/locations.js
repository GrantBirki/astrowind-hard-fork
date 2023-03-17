// Configuration for the locations component on the home page

const locations = {
  // Show or hide the locations component
  enabled: true,

  // Small highlight text at the top of the component
  highlight: 'Physical Locations',

  // Main title text
  title: 'Locations',
  // Subtitle text
  subtitle: 'Drop in and see us at one of our locations.',

  // Location cards to display
  locations: [
    {
      name: 'Location 1',
      address: 'Level 1, 1/2-4 Caxton Street, Milton, QLD 4064',
      description: 'Location 1 description',
      image: {
        alt: 'location 1',
        height: '140',
        src: 'https://images.unsplash.com/photo-1678986992005-87c3f4a2b0af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
      },
      buttons: [
        {
          text: 'View Location',
          link: 'https://www.google.com',
          target: '_blank', // opens in new tab
          size: 'large',
        },
      ],
    },
    {
      name: 'Location 2',
      address: 'Level 1, 1/2-4 Caxton Street, Milton, QLD 4064',
      description: 'Location 2 description',
      image: {
        alt: 'location 2',
        height: '140',
        src: 'https://images.unsplash.com/photo-1678986992005-87c3f4a2b0af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
      },
      buttons: [
        {
          text: 'View Location',
          link: 'https://www.google.com',
          target: '_blank', // opens in new tab
          size: 'large',
        },
      ],
    },
  ],
};

export default locations;
