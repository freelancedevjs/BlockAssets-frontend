import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';
import { Poppins } from 'next/font/google';
import 'react-tooltip/dist/react-tooltip.css';
import { siteConfig } from '@/constant/config';
import { UserTypeProvider } from '@/contexts/userTypeContext';
import Providers from '@/proividers';
import { Toaster } from '@/components/ui/Toast/toaster';
import { NotificationsProvider } from '@/contexts/NotificationContext';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.className}>
      <body className={poppins.className}>
        <Providers>
          <NotificationsProvider>
            <UserTypeProvider>{children}</UserTypeProvider>
          </NotificationsProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
