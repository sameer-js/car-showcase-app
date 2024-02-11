import type { Metadata } from 'next';
import './globals.css';
import { Footer, NavBar } from '@/components';

export const metadata: Metadata = {
  title: 'CarHub',
  description:
    'Find, book or rent a car — quickly and easily! Streamline your car rental experience with our effortless booking process.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
