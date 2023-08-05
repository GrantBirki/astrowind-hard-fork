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
          href: getPermalink('#features'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
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
          text: 'Gallery',
          href: getPermalink('/gallery'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
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
      text: "Blog",
      links: [
        {
          text: "Blog List",
          href: getBlogPermalink(),
        },
        {
          text: "Article",
          href: getPermalink("get-started-website-with-astro-tailwind-css", "post"),
        },
        {
          text: "Article (with Widgets)",
          href: getPermalink("markdown-elements-demo-post", "post"),
        },
        {
          text: "Category Page",
          href: getPermalink("tutorials", "category"),
        },
        {
          text: "Tag Page",
          href: getPermalink("astro", "tag"),
        },
      ],
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
