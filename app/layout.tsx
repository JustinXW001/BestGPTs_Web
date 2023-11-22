import "./globals.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BestGPTs - Search The Best GPTs For You.",
  description:
    "You can get the best GPTs here.",
  keywords:
    "GPTs, GPTs store, Best GPTs, ChatGPT, OpenAI GPTs, vector search GPTs",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const clarityScript = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "judxx3bpdd");
  `;

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: clarityScript }}
        />
      </head>
      <body className={inter.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>

        <script
          defer
          data-domain="gpts.works"
          src="https://plausible.io/js/script.js"
        ></script>
      </body>
    </html>
  );
}
