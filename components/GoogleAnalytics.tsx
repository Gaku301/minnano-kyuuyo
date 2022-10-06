import { ReactElement } from "react"
import Script from "next/script"
import { existsGaId, GA_ID } from "../lib/gtag"

export const GoogleAnalytics = (): ReactElement => {
  return(
    <>
    {existsGaId && (
      <>
        {/* Analytics */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></Script>
        <Script
          id="ga"
          defer
          strategy="afterInteractive"
        >{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());    
            gtag('config', '${GA_ID}');
        `}</Script>
        {/* Adsense */}
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4739003769773423"
          crossOrigin="anonymous"
        ></Script>
      </>
    )}
    </>
  );
}

