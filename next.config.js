/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/next13-ts-bootstrap",
    assetPrefix: process.env.NODE_ENV === "production" ? "https://blythe4.github.io/next13-ts-bootstrap" : "",
    output: "export",
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
