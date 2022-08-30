import Head from "next/head";
import Script from "next/script";

const Layout = ({
  title,
  children,
  description,
  ogtitle,
  ogdescription,
  twitterdescription,
  twittertitle,
  ogurl,
  keywords,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content={description} />
        <meta property="og:title" content={ogtitle} />
        <meta property="og:description" content={ogdescription} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="Web" />
        <meta property="og:url" content={ogurl} />
        <meta property="og:site_name" content="Mobifinx" />
        <meta name="twitter:description" content={twitterdescription} />
        <meta name="twitter:title" content={twittertitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MobifinX" />
        <meta name="twitter:creator" content="@MobifinX" />
        <meta
          name="page-topic"
          content="Cryptocurrency Exchange, Derivatives Trading, Spot Trading, NFT, DeFi, OTC Desk, P2P Trading, Private Blockchain and Tokenization, Fund Raising Crypto Launchpad"
        />
        <meta name="author" content="MobifinX" />
        <meta name="editors-url" content="MobifinX.com" />
        <meta
          name="DC.title"
          content="MobifinX Redefining Trading Technologies"
        />
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="Garden City" />
        <meta name="geo.position" content="40.730016;-73.6039" />
        <meta name="ICBM" content="40.730016, -73.6039" />
        <meta name="YahooSeeker" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta name="googlerank" content="all" />
        <meta name="Distribution" content="Global" />
        <meta name="email" content="hello@mobifinx.com" />
        <meta name="Rating" content="General" />
        <meta name="application-name" content="MobifinX" />
      </Head>
      <Script
        type="text/javascript"
        src="https://nqtl-zgph.maillist-manage.com/js/optin.min.js"
        onload={
          "setupSF('sf3z5ce9c16be8709aa8aa22ac8ddde609847c7c40617ba32586d78cf79bec7cc268','ZCFORMVIEW',false,'light',false,'0')"
        }
      ></Script>

      {/* <Script type="text/javascript">
        function
        runOnFormSubmit_sf3z5ce9c16be8709aa8aa22ac8ddde609847c7c40617ba32586d78cf79bec7cc268(th)
        Before submit, if you want to trigger your event, "include your code here"
        ;
      </Script> */}
      <main>{children}</main>
    </div>
  );
};
export default Layout;
