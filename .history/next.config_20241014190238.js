/** @type {import('next').NextConfig} */

const rewrites = () => {
  return [
    {
      source: "/api/:slug*",
      destination: "https://api-dev.aictopusde.com/api/:slug*",
      has: [
        {
          type: 'header',
          key: 'x-use-external-api',
          value: 'true'
        }
      ]
    },
  ];
};

const nextConfig = {
  rewrites,
  reactStrictMode: true,
  
  compiler: {
    styledComponents: true, // 添加
  },
}

module.exports = nextConfig


// const nextConfig = {}

// module.exports = nextConfig
