const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Mimoo',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: ['Getting Started'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: ['README.md'],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/henry/Documentos/WorkSpace/mimoo/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: ['**/*.mdx'],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Mimoo',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/henry/Documentos/WorkSpace/mimoo',
          templates:
            '/home/henry/Documentos/WorkSpace/mimoo/node_modules/docz-core/dist/templates',
          docz: '/home/henry/Documentos/WorkSpace/mimoo/.docz',
          cache: '/home/henry/Documentos/WorkSpace/mimoo/.docz/.cache',
          app: '/home/henry/Documentos/WorkSpace/mimoo/.docz/app',
          appPackageJson: '/home/henry/Documentos/WorkSpace/mimoo/package.json',
          appTsConfig: '/home/henry/Documentos/WorkSpace/mimoo/tsconfig.json',
          gatsbyConfig:
            '/home/henry/Documentos/WorkSpace/mimoo/gatsby-config.js',
          gatsbyBrowser:
            '/home/henry/Documentos/WorkSpace/mimoo/gatsby-browser.js',
          gatsbyNode: '/home/henry/Documentos/WorkSpace/mimoo/gatsby-node.js',
          gatsbySSR: '/home/henry/Documentos/WorkSpace/mimoo/gatsby-ssr.js',
          importsJs:
            '/home/henry/Documentos/WorkSpace/mimoo/.docz/app/imports.js',
          rootJs: '/home/henry/Documentos/WorkSpace/mimoo/.docz/app/root.jsx',
          indexJs: '/home/henry/Documentos/WorkSpace/mimoo/.docz/app/index.jsx',
          indexHtml:
            '/home/henry/Documentos/WorkSpace/mimoo/.docz/app/index.html',
          db: '/home/henry/Documentos/WorkSpace/mimoo/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
