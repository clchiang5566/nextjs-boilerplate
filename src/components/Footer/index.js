'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #e5e7eb',
        background: '#f9fafb',
        padding: '24px',
        marginTop: 32,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <div>© 2026 Brand</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <Link href='/' style={{ color: '#374151', textDecoration: 'none' }}>Home</Link>
          <Link href='/about' style={{ color: '#374151', textDecoration: 'none' }}>About</Link>
        </div>
      </div>
    </footer>
  );
}
