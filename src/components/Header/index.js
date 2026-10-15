'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header
      style={{
        borderBottom: '1px solid #e5e7eb',
        background: '#fff',
        padding: '16px 24px',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <Link href='/' style={{ fontWeight: 700, color: '#111827', textDecoration: 'none' }}>
          Brand
        </Link>

        <div style={{ display: 'flex', gap: 16 }}>
          <Link href='/' style={{ color: '#374151', textDecoration: 'none' }}>Home</Link>
          <Link href='/about' style={{ color: '#374151', textDecoration: 'none' }}>About</Link>
        </div>
      </nav>
    </header>
  );
}
