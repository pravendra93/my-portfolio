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
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        cpus: 1,
        workerThreads: false,
    },
};

export default nextConfig;
