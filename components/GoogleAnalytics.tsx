import { ReactElement } from "react"
import Script from "next/script"
import { existsGaId, GA_ID } from "../lib/gtag"

export const GoogleAnalytics = (): ReactElement => {
  return(
    <>
    {existsGaId && (
      <>
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
      </>
    )}
    </>
  );
}

