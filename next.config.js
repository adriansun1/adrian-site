module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    // Important: return the modified config
    return config;
  }
};
