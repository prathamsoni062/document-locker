
export default {
  basePath: '/demo_app/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
