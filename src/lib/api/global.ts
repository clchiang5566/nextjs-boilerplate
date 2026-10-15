import { fetchApi } from '@/lib/api/client';

export type GlobalSettings = {
  language: string;
  siteName: string;
  companyName: string;
  contactEmail: string;
  socialLinks: Record<string, string>;
  navigation: Array<{ label: string; href: string }>;
  footer: {
    description: string;
  };
};

export async function getGlobalSettings(language = 'en'): Promise<GlobalSettings> {
  return fetchApi<GlobalSettings>(`/api/global?language=${language}`);
}
