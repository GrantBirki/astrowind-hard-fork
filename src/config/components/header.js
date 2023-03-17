import { getPermalink, getBlogPermalink } from '~/utils/permalinks';

const headerData = {
  links: [
    {
      text: 'Landing',
      links: [
        {
          text: 'Sass',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/landing/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/landing/mobile-app'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features',
          href: '#',
        },
        {
          text: 'Pricing',
          href: '#',
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: '#',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    {
      // text to display on the button
      text: 'Download',
      // link to go to when the button is clicked
      href: 'https://github.com/onwidget/astrowind',
      // can be 'button', 'primary', or 'ghost'
      type: 'button',
      // HTML rel attribute
      rel: 'noopener',
      // HTML target attribute
      target: '_blank',
    },
  ],
};

export default headerData;
