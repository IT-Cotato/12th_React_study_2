/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/image/upload/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/800x600/png",
        search: "",
      }
    ],
  },
};
