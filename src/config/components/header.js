// Configuration for the header component on all pages

// ----------- imports -----------
import { getPermalink, getBlogPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const headerData = {
  // List of links to be displayed in the header
  links: [
    {
      // The text to be diplayed on the dropdown where there are multiple links
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
          text: 'Team',
          href: getPermalink('/team'),
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

    // A single link with no dropdown
    {
      text: 'Widgets',
      href: '#',
    },

    // The blog link is a special case, it uses the getBlogPermalink function
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],

  // List of buttons to be displayed in the header
  actions: [
    {
      // text to display on the button
      text: 'Download',
      // link to go to when the button is clicked
      href: 'https://github.com/grantbirki/astrowind',
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
