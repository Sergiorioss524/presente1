# Presente Bolivia Blog

A modern, fast, and responsive blog platform for Presente Bolivia, built with Next.js and focused on delivering high-quality political and social content about Bolivia.

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.3-06B6D4?style=flat-square&logo=tailwindcss)
![Contentlayer](https://img.shields.io/badge/Contentlayer-0.4.6-orange?style=flat-square)

## ✨ Features

- **📝 Content Management**: MDX-based blog posts with frontmatter support
- **👥 Author Profiles**: Dedicated author pages with social links
- **🏷️ Tag System**: Categorized content with tag-based navigation
- **🔍 Search**: Built-in search functionality with local indexing
- **📱 Responsive Design**: Mobile-first design with Tailwind CSS
- **🌙 Dark Mode**: Theme switching with next-themes
- **⚡ Performance**: Static site generation with Next.js for optimal speed
- **📊 Analytics**: Integrated with Vercel Analytics
- **🎨 Typography**: Beautiful typography with @tailwindcss/typography
- **🔗 SEO Optimized**: Automatic sitemap generation and meta tags

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - UI library with concurrent features

### Content Management

- **[Contentlayer 2](https://contentlayer.dev/)** - Type-safe content SDK
- **[MDX](https://mdxjs.com/)** - Markdown with JSX components
- **[Gray Matter](https://github.com/jonschlinkert/gray-matter)** - Frontmatter parser
- **[Reading Time](https://github.com/ngryman/reading-time)** - Estimated reading time

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - Beautiful prose styles
- **[@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)** - Form styling
- **[@headlessui/react](https://headlessui.com/)** - Unstyled UI components
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Content Processing

- **[Pliny](https://github.com/timlrx/pliny)** - Blog utilities and components
- **[Rehype](https://github.com/rehypejs/rehype)** - HTML processor
  - `rehype-slug` - Add IDs to headings
  - `rehype-autolink-headings` - Add links to headings
  - `rehype-katex` - Math expressions
  - `rehype-citation` - Citations support
  - `rehype-prism-plus` - Syntax highlighting
- **[Remark](https://github.com/remarkjs/remark)** - Markdown processor
  - `remark-gfm` - GitHub Flavored Markdown
  - `remark-math` - Math expressions

### Development Tools

- **[ESLint](https://eslint.org/)** - Linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files

## 📁 Project Structure

```
presente1/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── tags/              # Tag pages
│   └── noticias/          # News section
├── components/            # Reusable React components
├── layouts/               # Page layouts
├── data/                  # Content and configuration
│   ├── blog/             # Blog posts (MDX)
│   ├── authors/          # Author profiles (MDX)
│   └── siteMetadata.js   # Site configuration
├── css/                   # Stylesheets
├── public/               # Static assets
└── scripts/              # Build scripts
```

## 📊 Analytics

This project includes Vercel Analytics for tracking page views and performance metrics. Analytics are automatically enabled in production.

Built with ❤️ for Presente Bolivia
