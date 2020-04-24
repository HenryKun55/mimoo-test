const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/.docz/.cache/dev-404-page.js"))),
  "component---src-components-button-button-mdx": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/src/components/Button/Button.mdx"))),
  "component---src-components-list-brands-list-brands-mdx": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/src/components/ListBrands/ListBrands.mdx"))),
  "component---src-components-tab-tab-mdx": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/src/components/Tab/Tab.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/.docz/src/pages/404.js")))
}

