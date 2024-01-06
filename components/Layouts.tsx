import { ReactElement, ReactNode } from "react"
import Head from "next/head"
import Footer from "./Footer"
// import ScriptGoogleAd from "./ScriptGoogleAd";

type Props = {
  children?: ReactNode;
}

const Layout = ({ children }: Props): ReactElement => {
  const title = 'みんなの給与'
  const description = `${title}をグラフで見ることができます。`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* OGP */}
        <meta property="og:url" content="https://minnano-kyuuyo.vercel.app/" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/top.png" />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content="ja_JP" />
        {/* twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@takane_x" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 font-kiwi bg-gray-100">
        <main className="flex w-full flex-1 flex-col items-center justify-center md:px-20 sm:px-5 text-center">
          {children}
        </main>
        <Footer /> 
        {/* <ScriptGoogleAd /> */}
      </div>
    </>
  );
}

export default Layout;