// Configuration for the primary content component on the home page

const content = {
  // If the entire content component should be enabled
  enabled: true,

  // Configuration for the primary section of the content component (the first and larger section)
  primary: {
    // If the primary section should be enabled
    enabled: true,

    // Small highlight text to go above the title
    highlight: 'Inside template',

    // Main title text of the primary content component
    title: "And what's inside? ...",

    // Main description text of the primary content component (HTML supported)
    description: `<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Ad vix debet docendi</h3>
    Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit
    te euismod tacimates.`,

    // The items to be displayed in the primary section
    items: [
      {
        title: 'Per ei quaeque sensibus',
        description:
          'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
      },
      {
        title: 'Cu imperdiet posidonium sed',
        description:
          'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
      },
      {
        title: 'Nulla omittam sadipscing mel ne',
        description:
          'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
      },
    ],

    // Configuration for the image to be displayed in the primary section
    image: {
      // If the image should be enabled
      enabled: true,
      // Alt text for the image
      alt: 'Colorful Image',
      // The image to be displayed
      src: import('~/assets/images/caos.jpg'),
    },
  },

  // Configuration for the secondary section of the content component (the second and smaller section)
  secondary: {
    // If the secondary section should be enabled
    enabled: true,

    // Items to be displayed in the secondary section
    items: [
      {
        title: 'Per ei quaeque sensibus',
      },
      {
        title: 'Cu imperdiet posidonium sed',
      },
      {
        title: 'Nulla omittam sadipscing mel ne',
      },
      {
        title: 'Per ei quaeque sensibus',
      },
      {
        title: 'Cu imperdiet posidonium sed',
      },
      {
        title: 'Nulla omittam sadipscing mel ne',
      },
    ],

    // Configuration for the image to be displayed in the secondary section
    image: {
      // If the image should be enabled
      enabled: true,
      // Alt text for the image
      alt: 'Vintage Image',
      // The image to be displayed
      src: import('~/assets/images/vintage.jpg'),
    },
  },
};

export default content;
