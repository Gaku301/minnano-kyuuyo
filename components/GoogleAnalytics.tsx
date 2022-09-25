import { ReactElement } from "react"
import Script from "next/script"
import { GA_ID } from "../lib/gtag"

export const GoogleAnalytics = (): ReactElement => {
  return(
    <>
    {GA_ID && (
      <>
        <Script defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script
          id="ga"
          defer
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());    
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });`,
          }}
          strategy="afterInteractive"
        />
      </>
    )}
    </>
  );
}

