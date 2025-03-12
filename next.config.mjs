/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ai.1tool.guru',
			},
		],
	},
};

export default nextConfig;
