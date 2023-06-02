/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "www.nongsaro.go.kr",
                port: "",
                pathname: "/portal/**",
            },
        ],
    },
};

module.exports = nextConfig;
