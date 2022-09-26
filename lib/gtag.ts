type ContactEvent = {
  action: 'submit_form'
  category: 'contact'
  label: string
}

type ClickEvent = {
  action: 'click'
  category: 'other'
  label: string
}

export type Event = ContactEvent | ClickEvent;

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// IDが取得できない場合
export const existsGaId = GA_ID !== '';

// PVを測定する
export const pageView = (path: string) => {
  if (!existsGaId) return;
  window.gtag('config', GA_ID, {
    page_path: path
  });
}

// GAイベントを発火させる
export const event = ({ action, category, label }: Event) => {
  if (!existsGaId) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
  });
}