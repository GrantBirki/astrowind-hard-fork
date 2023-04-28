// Hero configuration on the homepage

const hero = {
  // If the entire hero section should be enabled or not
  enabled: true,

  // Hero title with HTML support
  title: {
    enabled: true, // If the title should be enabled or not
    text: `Free template for<span class="text-accent dark:text-white highlight"> Astro 2.0</span> + Tailwind CSS + GitHub Pages`,
  },

  // Hero subtitle with HTML support
  subtitle: {
    enabled: true, // If the subtitle should be enabled or not
    text: `<span class="hidden sm:inline">
    <span class="font-semibold">AstroWind</span> is a free, customizable and production-ready template for Astro 2.0
    + Tailwind CSS.</span
    >
    <span class="block mb-1 sm:hidden font-bold text-blue-600">AstroWind: Production-ready.</span> Suitable for Startups,
    Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.`,
  },

  // First CTA block
  callToAction: {
    // Enable or disable first CTA
    enabled: true,
    // CTA text
    text: 'Get template',
    // CTA link
    href: 'https://github.com/grantbirki/astrowind',
    // Target html <a> tag
    target: '_blank',
    // Rel html <a> tag
    rel: 'noopener',
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
    // Target html <a> tag
    target: '_blank',
    // Rel html <a> tag
    rel: 'noopener',
    icon: 'tabler:book',
  },

  // Hero image
  image: {
    // If the image should be enabled or not
    enabled: true,
    // Image source
    src: import('~/assets/images/hero.png'),
    // Image alt text
    alt: 'AstroWind Hero Image',
  },
};

export default hero;
