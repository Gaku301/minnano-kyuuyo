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

export type Event = ContactEvent | ClickEvent


export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// PVを測定する
export const pageView = (path: string) => {
  if (GA_ID === '') return;
  window.gtag('config', GA_ID, {
    page_path: path
  });
}

// GAイベントを発火させる
export const event = ({ action, category, label }: Event) => {
  if (GA_ID === '') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label)
  });
}