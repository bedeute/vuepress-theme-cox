const removeMd = require('remove-markdown')
const path = require('path')

module.exports = (themeConfig, ctx) => {
  themeConfig = Object.assign(themeConfig, {
    summary: themeConfig.summary === undefined ? true : themeConfig.summary,
    summaryLength:
      typeof themeConfig.summaryLength === 'number'
        ? themeConfig.summaryLength
        : 200,
    pwa: !!themeConfig.pwa,
  })

  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'blog',
        dirname: '_posts',
        path: '/blog/',
        // layout: 'IndexPost', defaults to `Layout.vue`
        itemLayout: 'Post',
        itemPermalink: '/blog/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5,
        },
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
        // layout: 'Tag',  defaults to `FrontmatterKey.vue`
        frontmatter: { title: 'Tag' },
        pagination: {
          lengthPerPage: 5,
        },
      },
    ],
  }

  const { modifyBlogPluginOptions } = themeConfig

  const blogPluginOptions =
    typeof modifyBlogPluginOptions === 'function'
      ? modifyBlogPluginOptions(defaultBlogPluginOptions)
      : defaultBlogPluginOptions

  const plugins = [
    '@vuepress/plugin-nprogress',
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    ['@goy/svg-icons',
      {
        svgsDir: path.resolve(__dirname, 'assets/icons')
      }
    ],
    ['container',
      {
        type: 'tip',
        defaultTitle: '',
      }
    ],
    ['container',
      {
        type: 'danger',
        defaultTitle: '',
      }
    ],
    ['@vuepress/blog', blogPluginOptions],
  ]

  if (themeConfig.pwa) {
    plugins.push([
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ])
  }

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination',
    },
  }

  /**
   * Generate summary.
   */
  if (themeConfig.summary) {
    config.extendPageData = function(pageCtx) {
      const strippedContent = pageCtx._strippedContent
      if (!strippedContent) {
        return
      }
      pageCtx.summary = removeMd(
        strippedContent
          .trim()
          .replace(/^#+\s+(.*)/, '')
          .slice(0, themeConfig.summaryLength)
      ) + ' ...'
      const firstImageRegex = pageCtx._strippedContent.match(/(!?\[(.*?)\]\:?\(?)(.*?\.(jpe?g|gif|png|tiff))\)?/)
      if (firstImageRegex) {
        pageCtx.firstImage = firstImageRegex[3].trim()
      } else {
        pageCtx.firstImage = 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&w=1000&q=80'
      }
    }
  }

  return config
}
