// blog post configuration

const blog = {
  isEnabled: true,
  postsPerPage: 4,

  post: {
    permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
    noindex: false,
    isEnabled: true,
    robots: {
      index: true,
    },
  },

  list: {
    pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
    noindex: false,
    isEnabled: true,
    robots: {
      index: true,
    },
  },

  category: {
    pathname: 'category', // Category main path /category/some-category
    noindex: true,
    isEnabled: true,
    robots: {
      index: true,
    },
  },

  tag: {
    pathname: 'tag', // Tag main path /tag/some-tag
    noindex: true,
    isEnabled: true,
    robots: {
      index: false,
    },
  },
};

export default blog;
