
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://prathamsoni062.github.io/document-locker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://prathamsoni062.github.io/document-locker/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/https://prathamsoni062.github.io/document-locker/*"
  }
],
  assets: {
    'index.csr.html': {size: 14441, hash: '974eb4d0e496853e8bc0ad6f6c0f51887cba2f881a1eca18e16e83ad8734ff6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8015, hash: 'ddde418a85917cac6bdd4b0617346ae8c42da83ae3ce16818b57595f8b5dd0e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 21096, hash: '254f0da4c4d8c35b87193530624b383fb649f25fc6a1e198b063109f12b194d8', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
