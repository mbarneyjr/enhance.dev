export default function SiteHeader ({ html, state }) {
  const { attrs } = state
  const { active = '' } = attrs

  const checkActive = href => active === href ? 'active' : ''

  const productPageLabels = {
    '/': 'Home',
    '/docs': 'Docs',
    '/resources': 'Resources',
    '/wasm': 'WASM',
    '/why-enhance': 'Why Enhance',
  }

  return html`
    <style scope="global">
      body {
        margin-block-start: var(--masthead-max-height);
      }

      /* Allow masthead to set its own link colours */
      begin-masthead a {
        color: unset;
      }
    </style>

    <begin-masthead product="Enhance" active="products" breakpoint="56em">
      <span slot="product-page">${productPageLabels[active]}</span>
      <product-nav slot="product-nav"></product-nav>
      <div slot="product-nav-lg" class="flex align-items-center">
        <masthead-product-link
          href="/"
          ${checkActive('/')}
        >
          Home
        </masthead-product-link>

        <masthead-product-link
          href="/docs"
          ${checkActive('/docs')}
        >
          Docs
        </masthead-product-link>

        <masthead-product-link
          href="/cookbook"
          ${checkActive('/cookbook')}
        >
          Cookbook
        </masthead-product-link>

        <masthead-product-link
          href="/wasm"
          ${checkActive('/wasm')}
        >
          Enhance WASM
        </masthead-product-link>

        <masthead-product-link
          href="/why-enhance"
          ${checkActive('/why-enhance')}
        >
          Why Enhance?
        </masthead-product-link>
      </div>
    </begin-masthead>
  `
}
