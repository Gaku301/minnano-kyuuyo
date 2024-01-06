import Script from "next/script";

const ScriptGoogleAd = () => {
    return (
        <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4739003769773423"
            crossOrigin="anonymous" 
        />
    )
}

export default ScriptGoogleAd;