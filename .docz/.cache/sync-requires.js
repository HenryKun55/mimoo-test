const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/.docz/.cache/dev-404-page.js"))),
  "component---components-alert-mdx": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/components/Alert.mdx"))),
  "component---components-button-mdx": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/components/Button.mdx"))),
  "component---readme-md": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/README.md"))),
  "component---src-components-button-index-mdx": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/src/components/Button/index.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/henry/Documentos/WorkSpace/mimoo/.docz/src/pages/404.js")))
}

