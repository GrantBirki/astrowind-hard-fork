// Hero configuration on the homepage

const hero = {
  // First CTA block
  callToAction: {
    // CTA text
    text: 'Get template',
    // CTA link
    href: 'https://github.com/onwidget/astrowind',
    // CTA icon
    icon: 'tabler:download',
  },

  // Second CTA block (optional)
  callToAction2: {
    // Enable or disable second CTA
    enabled: true,
    // CTA text
    text: 'Learn more',
    // CTA link
    href: '#features',
  },

  // Hero image
  image: {
    // Image source
    src: import('~/assets/images/hero.png'),
    // Image alt text
    alt: 'AstroWind Hero Image',
  },
};

export default hero;
