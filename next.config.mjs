/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

if (process.env.NODE_ENV === "production") {
  nextConfig["output"] = "export";
}

export default nextConfig;
