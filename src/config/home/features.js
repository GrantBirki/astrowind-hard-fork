// Configuration for the features component on the homepage

const features = {
  // If the features component should be enabled or not on the homepage
  enabled: true,

  // highlight text for the features component
  highlight: 'Features',

  // Title for the features component
  title: 'What you get with AstroWind',

  // Subtitle for the features component
  subtitle:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.',

  // List of features to display with HTML support
  items: [
    [
      {
        title: 'Astro + Tailwind CSS Integration',
        description:
          'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
        icon: 'tabler:brand-tailwind',
      },
      {
        title: 'Ready-to-use Components',
        description:
          'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
        icon: 'tabler:components',
      },
      {
        title: 'Best Practices',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
        icon: 'tabler:list-check',
      },
    ],
    [
      {
        title: 'Excellent Page Speed',
        description:
          'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
        icon: 'tabler:rocket',
      },
      {
        title: 'Search Engine Optimization (SEO)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
        icon: 'tabler:arrows-right-left',
      },
      {
        title: 'Open to new ideas and contributions',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
        icon: 'tabler:bulb',
      },
    ],
  ],
};

export default features;
