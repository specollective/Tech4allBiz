/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === "production") {
  nextConfig["output"] = "export";
  nextConfig["distDir"] = "build";
}

export default nextConfig;
