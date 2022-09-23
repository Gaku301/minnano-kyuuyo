import { useRouter } from "next/router"
import Script from "next/script"
import { ReactElement, useEffect } from "react"


type ContactEvent = {
  action: 'submit_form'
  category: 'caontact'
  label: string
}

type ClickEvent = {
  action: 'click'
  category: 'other'
  label: string
}

export type Event = (ContactEvent | ClickEvent) & {
  label?: Record<string, string | number | boolean>
  value?: string
}


export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// PVを測定する
export const pageView = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path
  });
}

// GAイベントを発火させる
export const event = ({ action, category, label, value='' }: Event) => {
  if (GA_ID === '') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label ? JSON.stringify(label) : '',
    value
  });
}

export const usePageView = () => {
  const router = useRouter();

  useEffect(() => {
    if (GA_ID === '') return;

    const handleRouteChange = (path: string) => {
      pageView(path);
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);
}

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
              gtag('config', '${GA_ID}');
              `,
          }}
          strategy="afterInteractive"
        />
      </>
    )}
    </>
  );
}

