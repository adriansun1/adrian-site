module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
  env: {
    GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    EMAIL_URL: process.env.NEXT_PUBLIC_EMAIL_URL,
    LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
};
