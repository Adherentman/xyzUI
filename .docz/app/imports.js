export const imports = {
  'docz/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docz-home" */ 'docz/Home.mdx'),
  'docz/components/Box.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docz-components-box" */ 'docz/components/Box.mdx'),
  'docz/components/Typography.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docz-components-typography" */ 'docz/components/Typography.mdx'),
}
