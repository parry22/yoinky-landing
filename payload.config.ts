import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001'

export default buildConfig({
  admin: {
    user: 'users',
    theme: 'dark',
    livePreview: {
      url: ({ data }) => `${SITE_URL}/blog/${data.slug}`,
      collections: ['posts'],
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 812 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  editor: lexicalEditor(),
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'email' },
      fields: [],
    },
    {
      slug: 'media',
      upload: true,
      fields: [{ name: 'alt', type: 'text' }],
    },
    {
      slug: 'posts',
      admin: { useAsTitle: 'title' },
      access: {
        read: ({ req }) => {
          if (req.user) return true
          return { _status: { equals: 'published' } }
        },
      },
      versions: {
        drafts: true,
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true, admin: { position: 'sidebar' } },
        { name: 'excerpt', type: 'textarea' },
        { name: 'tag', type: 'text' },
        { name: 'author', type: 'text' },
        { name: 'readTime', type: 'number' },
        { name: 'image', type: 'text', admin: { description: 'Path or URL to hero image, e.g. /context.png' } },
        { name: 'content', type: 'richText' },
        { name: 'publishedAt', type: 'date', admin: { position: 'sidebar' } },
      ],
    },
  ],
  plugins: [
    seoPlugin({
      collections: ['posts'],
      uploadsCollection: 'media',
      tabbedUI: true,
      generateTitle: ({ doc }) => `${doc.title} | Yoinky Blog`,
      generateDescription: ({ doc }) => doc.excerpt as string,
      generateURL: ({ doc }) => `${SITE_URL}/blog/${doc.slug}`,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
