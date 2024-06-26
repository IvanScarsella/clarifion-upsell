import { Manrope } from 'next/font/google';
import './globals.css';

const inter = Manrope({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Clarifion Upsell',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
