module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.html$/i,
      loader: 'html-loader',
    });

    // Important: return the modified config
    return config;
  },
  env: {
    GITHUB_URL: process.env.GITHUB_URL,
    EMAIL_URL: process.env.EMAIL_URL,
    LINKEDIN_URL: process.env.LINKEDIN_URL,
  },
};
