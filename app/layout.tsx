import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
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
      <body className={`${poppinsFont.className} antialiased`}>{children}</body>
    </html>
  );
}
