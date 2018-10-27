export const imports = {
	'docs/Home.mdx': () =>
		import(/* webpackPrefetch: true, webpackChunkName: "docs-home" */ 'docs/Home.mdx'),
	'docs/components/Button.mdx': () =>
		import(/* webpackPrefetch: true, webpackChunkName: "docs-components-button" */ 'docs/components/Button.mdx'),
	'docs/components/Typography.mdx': () =>
		import(/* webpackPrefetch: true, webpackChunkName: "docs-components-typography" */ 'docs/components/Typography.mdx'),
}
