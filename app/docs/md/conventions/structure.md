---
title: Structure
---

Enhance projects are set up to enable you to create dynamic multi-page applications with as little friction as possible. They come preconfigured with everything you need to work with file-based routing and standards-based components.

```
app
├── api ............... data routes
│   └── index.mjs
├── browser ........... browser JavaScript
│   └── index.mjs
├── elements .......... custom element pure functions
│   └── my-header.mjs
├── pages ............. file-based routing
│   └── index.html
└── head.mjs .......... custom <head> component
```

## Head
The `head.mjs` file is responsible for composing your document’s `<head>` tag, and all the contents within it. The default `head` comes preloaded with a few useful meta tags and the styles generated by [Enhance Styles](/docs/enhance-styles). You can (and should!) customize this to your liking.

<doc-callout level="none" mark="🤖">

**[Read more about the Head component →](/docs/conventions/head)**

</doc-callout>


## Pages
The pages folder enables file-based routing. To add a route just add an HTML file to this directory (or another directory within it). The name of the file will be the URL you view it at. For example, `app/pages/about.html` will be viewed at `/about`.

<doc-callout level="none" mark="📃">

**[Read more about pages →](/docs/conventions/pages)**

</doc-callout>

## Elements
The elements folder is where you keep your [Enhance Elements](/docs/elements). These are custom element templates that get rendered server side and set your HTML page up for progressive enhancement.

Elements must be [named](https://html.spec.whatwg.org/multipage/custom-elements.html#prod-potentialcustomelementname) with one or more words separated by a dash `my-header.mjs` which corresponds to the tag name you author in your HTML pages — for example `<my-header></my-header>`.

<doc-callout level="none" mark="🔥">

**[Read more about elements →](/docs/conventions/elements)**

</doc-callout>

## API

The `api` folder is preconfigured to expose data to your file-based routes. For example, the file `app/api/index.mjs` will automatically pass state to `app/pages/index.mjs` as well as expose an endpoint for standard REST verbs like `get` and `post`.

<doc-callout level="none" mark="🪄">

**[Read more about `api` routes →](/docs/conventions/api)**

</doc-callout>

## Browser

The `browser` folder is preconfigured to output a bundle to be used when progressively enhancing your pages in the browser. Files in `app/browser` are bundled to `/public/browser/`. For example, `app/browser/index.mjs` will be bundled with any imported dependencies to `/public/browser/index.mjs` and available to be loaded by a script tag at `/_public/browser/index.mjs`.

<doc-callout level="none" mark="🦄">

**[Read more about `browser` bundles here →](/docs/conventions/browser)**

</doc-callout>

## Public

The `public` folder is preconfigured to serve fingerprinted static assets such as CSS files, scripts, images, and more. If your application relies on these sorts of static assets, this is the place to put them!

<doc-callout level="none" mark="🚚">

**[Read more about the `public` directory →](/docs/conventions/public)**

</doc-callout>