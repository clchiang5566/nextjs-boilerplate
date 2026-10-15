export async function GET() {
  const baseUrl = process.env.CMS_BASE || 'https://jsonplaceholder.typicode.com';

  try {
    const res = await fetch(`${baseUrl}/posts?_limit=5`, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      return Response.json({ error: 'Failed to fetch home page data' }, { status: res.status });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
