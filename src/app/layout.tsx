import '@/app/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js 15 Boilerplate',
  description: 'Modern Next.js 15 & React 19 Starter Kit',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}