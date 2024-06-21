import type { Metadata } from 'next';
import '@/app/globals.css';
import { sourceSansPro, merriweather } from '@/app/assets/fonts';

export const metadata: Metadata = {
  title: 'Les Echos',
  description: 'FrontEnd test',
};

const fonts = `${merriweather.variable} ${sourceSansPro.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts}>
      <body>{children}</body>
    </html>
  );
}
