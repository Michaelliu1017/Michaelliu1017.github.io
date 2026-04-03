import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    description: z.string(),
    descriptionZh: z.string().optional(),
    date: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    github: z.string().optional(),
    liveUrl: z.string().optional(),
    paperUrl: z.string().optional(),
    image: z.string().optional(),
    metric: z.string().optional(),
    metricLabel: z.string().optional(),
    category: z.enum(['research', 'ml-ai', 'full-stack', 'devops', 'open-source', 'systems']),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    companyZh: z.string().optional(),
    role: z.string(),
    roleZh: z.string().optional(),
    location: z.string(),
    locationZh: z.string().optional(),
    startDate: z.string(),
    endDate: z.string(),
    /** Full date range for Chinese UI, e.g. "2023 年6 月 – 2023 年8 月" */
    dateZh: z.string().optional(),
    order: z.number(),
    bulletsZh: z.array(z.string()).optional(),
  }),
});

export const collections = { projects, experience };
