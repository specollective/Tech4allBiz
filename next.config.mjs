/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.EXPORT_STATIC === "true") {
  console.log("Use export configs", process.env.EXPORT_STATIC);
  nextConfig["output"] = "export";
  nextConfig["distDir"] = "build";
}

export default nextConfig;
