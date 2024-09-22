/** @type {import('next').NextConfig} */

const rewrites = () => {
  return [
    {
      source: "/api/:slug*",
      destination: "https://dev.aictopusde.com/api/:slug*",
    },
  ];
};

const nextConfig = {
  rewrites
}

module.exports = nextConfig
