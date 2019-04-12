export const imports = {
  'docz/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docz-home" */ 'docz/Home.mdx'),
  'docz/components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docz-components-button" */ 'docz/components/Button.mdx'),
  'docz/components/Typography.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docz-components-typography" */ 'docz/components/Typography.mdx'),
}
