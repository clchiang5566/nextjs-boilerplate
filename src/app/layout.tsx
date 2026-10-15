import '@/styles/global.scss';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { AppProvider } from '@/providers/AppProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Brand',
    template: '%s | Brand',
  },
  description: 'Default site description',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Brand',
    description: 'Default site description',
    url: 'https://example.com',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}