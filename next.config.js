/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "www.nongsaro.go.kr",
                port: "",
                pathname: "/portal/**",
            },
            {
                protocol: "https",
                hostname: "dummyimage.com",
                port: "",
            },
        ],
    },
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;
