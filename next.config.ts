import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@payloadcms/db-postgres', 'pg', '@payloadcms/plugin-redirects'],
};

export default withPayload(nextConfig);
