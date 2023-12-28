export const seo = {
  title: 'Lesley | Keep living, keep loving, keep learning',
  description:
    'My name is Lesley, I am a game localiser, BJJ practitioner and aspiring singer',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
