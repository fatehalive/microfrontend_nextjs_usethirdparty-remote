const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  // reactStrictMode: true,
  webpack: (config, options) => {

    // Add Plugins
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Button': './src/components/Button'
        },
        extraOptions: {
          debug: true
        }
      })
    )

    return config
  }
}