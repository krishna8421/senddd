import "@/styles/globals.css";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import { type ReactNode } from "react";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  COUNTRY_NAME,
  TWITTER_URL,
  OG_IMAGE_URL,
  TWITTER_IMAGE_URL,
  FAVICON_URL,
  SITE_KEYWORDS,
} from "@/constants";
import NavBar from "./navbar";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  icons: [{ rel: "icon", url: FAVICON_URL }],
  keywords: SITE_KEYWORDS,
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: SITE_URL,
    countryName: COUNTRY_NAME,
    images: {
      url: OG_IMAGE_URL,
      width: 1260,
      height: 800,
      alt: "Open Graph image for " + SITE_NAME,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: {
      url: TWITTER_IMAGE_URL,
      width: 1260,
      height: 800,
      alt: "Twitter image for " + SITE_NAME,
    },
  },
};
type IProp = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: IProp) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.className} m-auto min-h-screen max-w-4xl antialiased`}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
