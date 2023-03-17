// Configuration for the site wide call to action
// This component config can be used on any page to display an identical call to action

const callToAction = {
  // If the call to action should be displayed
  enabled: true,

  // The title of the call to action component
  title: 'Astro + Tailwind CSS',

  // The subtitle of the call to action component (supports HTML)
  subtitle: `Be very surprised by these huge fake numbers you are seeing on this page. <br class="hidden md:inline" />Don't
    waste more time! :P`,

  // Button configuration for the call to action component
  button: {
    // If the button should be displayed
    enabled: true,
    // The text of the button
    text: 'Get template',
    // The link of the button
    href: 'https://github.com/grantbirki/astrowind',
    // The icon to the left of the button text
    icon: 'tabler:download',
    // HTML target attribute
    target: '_blank',
    // HTML rel attribute
    rel: 'noopener',
  },
};

export default callToAction;
