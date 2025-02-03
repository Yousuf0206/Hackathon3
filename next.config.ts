// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

const nextConfig = {
  images: {
    domains : ["cdn.sanity.io"]
  }
}

export default nextConfig

module.exports ={
  images: {
    remotePatterns: 
    [{
      protocol : 'https',
      hostname : 'cdn.sanity.io',
      pathname : '/**',
    },
    ],
  },
}