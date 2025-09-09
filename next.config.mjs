/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["resend","@supabase/supabase-js"]
  }
}
export default nextConfig
