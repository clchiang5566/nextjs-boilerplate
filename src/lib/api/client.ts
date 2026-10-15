export async function fetchApi<T>(path: string, options?: RequestInit): Promise<T> {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.LOCAL_BASE ||
    'http://localhost:3000';

  const url = /^https?:\/\//i.test(path) ? path : new URL(path, baseUrl).toString();

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API request failed: ${res.status}`);
  }

  return (await res.json()) as T;
}
