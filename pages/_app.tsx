import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layouts'
import { usePageView } from '../hooks/usePageView';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
