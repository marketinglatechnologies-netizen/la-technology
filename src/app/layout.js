import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";
import Preloader from "@/components/ui/Preloader";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // This creates a CSS variable
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat", // This creates a CSS variable
});

export const metadata = {
  title: {
    default: "LA Technologies",
    template: "%s | LA Technologies",
  },
  description: "Bespoke cybersecurity services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      {/* GTM Head Script */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5RCTSBHK');
          `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} flex flex-col min-h-screen antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5RCTSBHK"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>

        <Suspense fallback={null}>
          <Preloader />
        </Suspense>
        {/* The Navbar stays at the top of every page */}
        <Navbar />

        {/* The "children" prop represents the content of your 40 individual pages */}
        <main className="flex-grow">{children}</main>

        {/* The Footer stays at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}
