import theme from '@nuxt/content-theme-docs'

const accentColor = '#ff6600'

export default theme({
  docs: {
    primaryColor: accentColor,
  },

  css: ['../../../../static/css/common.css'],

  loading: { color: accentColor },

  i18n: {
    locales: () => [{
      code: 'ja',
      iso: 'ja-JP',
      file: 'ja-JP.js',
      name: '日本語'
    }],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja'
    },
  }
})
