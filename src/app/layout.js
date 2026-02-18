import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import "./styles/button.css";
import "./styles/responsiveness.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GSAPSmoothProvider from "./components/GSAPSmoothProvider";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

/* ✅ Helvetica Neue (replacing Poppins & Rajdhani) */
const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

/* ✅ Inter (NO CHANGE) */
const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
  variable: "--font-inter",
  display: "swap",
});

//Final Deployment

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${helvetica.variable} ${inter.variable}`}>
      <head>
        <title>Madebymee</title>
        {/* ✅ Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N7J9WLXF');
          `}
        </Script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      </head>

      <body style={{ height: "100%", overflow: "hidden" }}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7J9WLXF" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>

        <GSAPSmoothProvider>
          <Header />
          {children}
          <Footer />
        </GSAPSmoothProvider>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
      </body>
    </html>
  );
}
