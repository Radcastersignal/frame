import Head from "next/head";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";

export default function FramePage() {
  return (
    <>
      <Head>
        <title>FrameForge — Frames Marketplace</title>

        {/* Main OG */}
        <meta property="og:title" content="FrameForge — Frames Marketplace" />
        <meta
          property="og:description"
          content="A marketplace for ready-to-use Frames inside Farcaster. Buy, customize, and publish your Frame."
        />
        <meta property="og:image" content={`${DOMAIN}/og/screen1.png`} />

        {/* Farcaster Frame Meta */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="About" />
        <meta property="fc:frame:button:2" content="Roadmap" />
        <meta property="fc:frame:button:3" content="Buy Membership NFT" />
        <meta property="fc:frame:button:4" content="Join Community" />

        {/* API endpoint for button click */}
        <meta property="fc:frame:post_url" content={`${DOMAIN}/api/frame`} />
      </Head>

      <main style={{ padding: 20 }}>
        <h1>FrameForge</h1>
        <p>Open this page inside Farcaster as a Frame.</p>
      </main>
    </>
  );
}
