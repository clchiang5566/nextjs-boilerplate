export type HomePageResponse = Array<{
  userId: number;
  id: number;
  title: string;
  body: string;
}>;

export async function getHomePage(): Promise<HomePageResponse> {
  const baseUrl = process.env.CMS_BASE || 'https://jsonplaceholder.typicode.com';

  const res = await fetch(`${baseUrl}/posts?_limit=5`, {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Home page request failed: ${res.status}`);
  }

  return (await res.json()) as HomePageResponse;
}
