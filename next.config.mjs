/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
