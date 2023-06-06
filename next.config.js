/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  exclude: ["__test__/**/*", "__mocks__/**/*"],
  generateBuildId: () => "petple_deploy",
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "https://localhost:3000",
      },
    ];
  },
};

module.exports = nextConfig;
