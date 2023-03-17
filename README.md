# 🚀 AstroWind

This is a custom AstroWind template for deployment to GitHub pages

The original AstroWind template can be found here: [source](https://github.com/onwidget/astrowind)

## Features

> How is this template fork different?

This fork is designed for those who are not extremely familiar with Astro, or even web development in general. It is designed to be a simple, easy to use template for those who want to get started with Astro, but don't want to spend hours configuring the template.

This fork is also designed to be deployed to GitHub pages, which is a free and easy way to host your website.

## Config Files

The core way this template is different from the original is that it heavily uses `.js` config files to configure data and content for its site.

Here are a few common config directories and what you will find there:

- [`src/config/site/*`](src/config/site) - Site configuration
  - [`config.js`](src/config/site/config.js) - Global site configuration
  - [`blog.js`](src/config/site/blog.js) - Blog configuration
- [`src/config/home/*`](src/config/home) - Home page configuration
  - [`featured-posts.js`](src/config/home/featured-posts.js) - Featured blog posts on the home page
  - [`hero.js`](src/config/home/hero.js) - Hero component configuration on the home page
  - [`content.js`](src/config/home/content.js) - Main content component configuration on the home page
- [`src/config/components/*`](src/config/components) - Component configuration
  - [`announcement.js`](src/config/components/announcement.js) - Announcement component configuration on all pages
  - [`footer.js`](src/config/components/footer.js) - Footer component configuration on all pages
  - [`header.js`](src/config/components/header.js) - Header component configuration on all pages
  - [`logo.js`](src/config/components/logo.js) - Logo (text) component configuration on all pages

## Project structure

Inside AstroWind template, you'll see the following folders and files:

```text
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       └── base.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   └── Logo.astro
│   ├── config/
│   │   ├── components/
|   |   |   ├── announcement.js
|   |   |   ├── call-to-action.js
│   │   │   └── ...
│   │   ├── home/
|   |   |   ├── content.js
|   |   |   ├── faqs.js
│   │   │   └── ...
│   │   ├── site/
│   │   │   ├── blog.js
|   |   |   ├── config.js
│   │   │   └── ...
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ...
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── about.md
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.mjs
│   └── data.js
├── package.json
├── astro.config.mjs
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run Eslint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

### Development

Here are some basic commands to get you up and running to develop with this template:

1. Install `npm` dependencies

    ```bash
    npm i
    ```

2. Start the development server

    ```bash
    npm run dev
    ```

3. View your site at [`localhost:3000`](http://localhost:3000/)

> Live reload is enabled by default, so any changes you make will be reflected in the browser.

### Deploy

> Deployment docs for GitHub Pages

First, clone this repository on own GitHub account

If you want to deploy to a basic GitHub domain name, do the following to [`src/config/site/config.js`](src/config/site/config.js):

```js
origin: 'https://grantbirki.github.io', // Change this to your GitHub username
basePathname: '/astrowind', // Change this to your repository name
```

If you want to use your own custom domain name, do the following to [`src/config/site/config.js`](src/config/site/config.js):

```js
origin: 'https://astro-demo.birki.io', // Change this to your custom domain name make sure it points to your GitHub Pages domain
basePathname: '/', // leave this as a single /
```

Ensure you have configured GitHub Pages to use the GitHub Actions deployment option. When you `push` changes to your repository, GitHub will automatically build and deploy your site.

## Making Changes

This section goes into details on how you can make changes to the template.

## Live Commit Examples

Actual examples in the form of commits to this repository:

- [Adding a new page](https://github.com/GrantBirki/astrowind/commit/6836c11a3140181a65f252e3709e398f67e632c4)

## Acknowledgements

This theme is based off the template by [onwidget](https://github.com/onwidget/astrowind)
