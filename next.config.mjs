/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === "production") {
  nextConfig["distDir"] = "build";
  nextConfig["output"] = "export";
}

export default nextConfig;
