const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://1nqyxbp5.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;