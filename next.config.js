const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    async headers() {
        return [
            {
                // Sets security headers for all routes
                source: '/(.*)',
                headers: [
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    }
                ],
            },
        ];
    },
}

module.exports = nextConfig