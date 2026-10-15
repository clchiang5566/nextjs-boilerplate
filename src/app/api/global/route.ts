export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get('language') || 'en';

  const payload = {
    language,
    siteName: 'Brand Name',
    companyName: 'Brand Company',
    contactEmail: 'hello@example.com',
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
    footer: {
      description: 'Modern website built with Next.js 16.',
    },
  };

  return Response.json(payload);
}
