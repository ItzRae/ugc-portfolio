export const stats = [
  { num: '3.2M+', label: 'Views Delivered' },
  { num: '8.4%',  label: 'Avg. Engagement' },
  { num: '47+',   label: 'Brands Worked With' },
  { num: '24h',   label: 'Avg. Turnaround' },
]

export type VideoItem = {
  id: string
  brand: string
  category: string         // shown on card e.g. "Beauty" "SaaS"
  contentType: string      // e.g. "Hook", "Listicle", "Demo"
  tab: 'tech' | 'beauty'
  file: string             // filename in /public/videos/
  thumbnail: string        // filename in /public/images/thumbnails/
  metrics?: {
    reach?: string
    engagement?: string
    signups?: string
  }
}

export const videos: VideoItem[] = [
  // ── TECH / SAAS / AI ──────────────────────────────────────────
  {
    id: 'v1',
    brand: 'Perplexity AI',
    category: 'AI',
    contentType: 'Tech/AI',
    tab: 'tech',
    file: 'perplexity1.mp4',
    thumbnail: 'perplexity1_tb.png',
    metrics: { reach: '210K' },
  },
  {
    id: 'v2',
    brand: 'Julius AI',
    category: 'AI',
    contentType: 'Storytelling/DIML',
    tab: 'tech',
    file: 'julius_ai.mp4',
    thumbnail: 'julius_tb.png',
    metrics: { reach: '210K' },
  },
  {
    id: 'v3',
    brand: 'Healthee',
    category: 'Food/Beverage',
    contentType: 'Problem/Solution',
    tab: 'tech',
    file: 'healthee.mp4',
    thumbnail: 'healthee_tb.png',
  },
  {
    id: 'v4',
    brand: 'Perplexity',
    category: 'Tech/AI',
    contentType: 'Storytelling',
    tab: 'tech',
    file: 'perplexity2.mp4',
    thumbnail: 'perplexity2_tb.png',
    metrics: { reach: '180K', engagement: '7.4%' },
  },

  // ── BEAUTY / WELLNESS ─────────────────────────────────────────
  {
    id: 'v5',
    brand: 'Neutrogena',
    category: 'Beauty',
    contentType: 'Routine',
    tab: 'beauty',
    file: 'neutrogena.mp4',
    thumbnail: 'neutrogena.jpg',
    metrics: { reach: '540K', engagement: '11.2%' },
  },
  {
    id: 'v6',
    brand: 'Innisfree',
    category: 'Skincare',
    contentType: 'Review',
    tab: 'beauty',
    file: 'innisfree.mp4',
    thumbnail: 'innisfree.jpg',
  },
  {
    id: 'v7',
    brand: 'Aveeno',
    category: 'Skincare',
    contentType: 'Hook',
    tab: 'beauty',
    file: 'aveeno.mp4',
    thumbnail: 'aveeno.jpg',
    metrics: { reach: '290K' },
  },
  {
    id: 'v8',
    brand: 'Farmacy',
    category: 'Wellness',
    contentType: 'Unboxing',
    tab: 'beauty',
    file: 'farmacy.mp4',
    thumbnail: 'farmacy-vid.jpg',
  },
]

export const portfolioTabs = [
  { key: 'all',    label: 'All Work' },
  { key: 'tech',   label: 'Tech & AI' },
  { key: 'beauty', label: 'Beauty & Wellness' },
] as const

export type TabKey = typeof portfolioTabs[number]['key']