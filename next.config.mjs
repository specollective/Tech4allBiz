/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === "production") {
  console.log("Use export configs", process.env.NODE_ENV);
  nextConfig["output"] = "export";
  nextConfig["distDir"] = "build";
}

export default nextConfig;
