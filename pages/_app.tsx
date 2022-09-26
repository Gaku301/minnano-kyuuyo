import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layouts'
import { usePageView } from '../hooks/usePageView';
import { GoogleAnalytics } from '../components/GoogleAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <Layout>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
