import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Auth0Provider } from '@auth0/nextjs-auth0';

import './globals.css';

const poppinsFont = Poppins({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Parkiu | Admin System',
  description: 'Parkiu Admin System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Auth0Provider>
        <body className={`${poppinsFont.className} antialiased`}>
          {children}
        </body>
      </Auth0Provider>
    </html>
  );
}
