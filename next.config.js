/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    output: 'standalone',
    experimental: {
        scrollRestoration: true,
    },
    images: {
        domains: ['blog.agroyaar.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "agroyaar.s3.ir-thr-at1.arvanstorage.ir",
                port: "443",
                pathname: "agroyaar.s3.ir-thr-at1.arvanstorage.ir/**",
            },
            {
                protocol: "https",
                hostname: "blog.agroyaar.com",
                port: "443",
                pathname: "blog.agroyaar.com/**",
            }
        ],
    },
}

module.exports = nextConfig
