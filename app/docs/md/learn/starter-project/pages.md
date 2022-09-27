---
title: Pages
---

Pages are the entry point for Enhance rendering. They are authored in standard HTML, and the output is setup for progressive enhancement with custom elements in the browser. Pages live in the `app/pages/` folder of the Enhance starter project.

## File based routing

Pages in the Enhance starter project enable file based routing. Meaning that adding a `app/pages/about.html` for instance will make it available at `/about` in your browser.

```
app/pages/index.html → https://yoursite.com/
app/pages/about.html → https://yoursite.com/about
```

## HTML by default

Pages are written in HTML and can be composed of many dynamic custom elements. Pages are meant to be rendered once server-side.

## Dynamic if need be

Pages can also be written as single file components. The difference is that it allows your page to handle state, but you should not need to do this as your Elements will be passed state. Keeping pages as html cuts down on unnecessary complexity, so we do not recommend this. State handling is a Custom Element concern.

<doc-callout level="none" mark="🙌">

**[Read about single file components here](/docs/learn/concepts/single-file-components)**

</doc-callout> 

## That's it

You'll find that working this way will allow you to start with standard HTML then incrementally create custom element components as the need for reuse arises.