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
        source: "/graphql/:path*",
        destination: "https://backend-practice.codebootcamp.co.kr/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
