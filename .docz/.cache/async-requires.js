// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---components-alert-mdx": () => import("./../../components/Alert.mdx" /* webpackChunkName: "component---components-alert-mdx" */),
  "component---components-button-mdx": () => import("./../../components/Button.mdx" /* webpackChunkName: "component---components-button-mdx" */),
  "component---readme-md": () => import("./../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-components-button-index-mdx": () => import("./../../src/components/Button/index.mdx" /* webpackChunkName: "component---src-components-button-index-mdx" */),
  "component---src-index-mdx": () => import("./../../src/index.mdx" /* webpackChunkName: "component---src-index-mdx" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

