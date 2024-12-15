
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/demo_app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/demo_app/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/*"
  }
],
  assets: {
    'index.csr.html': {size: 14402, hash: 'c8a4ddc7bc5f42ee72ffb6b25b9d6c81e18c1bc19e362b9f5577725dc75f6f40', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7976, hash: '8f1785e2153175d97c837f779f0940f506221831d1632c60e27c2f1823c45e55', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 26362, hash: 'a68e2b893684641a49ff8f92d3caa6b333a3e928e92f403ff56442697674697c', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
