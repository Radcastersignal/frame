import type { NextApiRequest, NextApiResponse } from "next";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";
const MINIAPP_URL = "https://frameforge.app/miniapp";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { buttonIndex } = req.body;

  if (!buttonIndex) {
    return res.status(400).send("buttonIndex missing");
  }

  if (buttonIndex === 1) return renderAbout(res);
  if (buttonIndex === 2) return renderRoadmap(res);
  if (buttonIndex === 3) return renderBuy(res);
  if (buttonIndex === 4) return renderCommunity(res);

  return res.status(400).send("Invalid button");
}

function renderAbout(res: NextApiResponse) {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="og:title" content="FrameForge — About" />
        <meta property="og:description" content="FrameForge is a marketplace for customizable Frames inside Farcaster." />
        <meta property="og:image" content="${DOMAIN}/og/screen2.png" />

        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="About" />
        <meta property="fc:frame:button:2" content="Roadmap" />
        <meta property="fc:frame:button:3" content="Buy Membership NFT" />
        <meta property="fc:frame:button:4" content="Join Community" />
        <meta property="fc:frame:post_url" content="${DOMAIN}/api/frame" />
      </head>
      <body>
        <h1>About FrameForge</h1>
        <p>FrameForge is a marketplace for customizable Frames inside Farcaster.</p>
      </body>
    </html>
  `);
}

function renderRoadmap(res: NextApiResponse) {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="og:title" content="FrameForge — Roadmap" />
        <meta property="og:description" content="Phase 1: Launch membership NFT. Phase 2: Marketplace. Phase 3: Editor. Phase 4: DAO." />
        <meta property="og:image" content="${DOMAIN}/og/screen3.png" />

        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="About" />
        <meta property="fc:frame:button:2" content="Roadmap" />
        <meta property="fc:frame:button:3" content="Buy Membership NFT" />
        <meta property="fc:frame:button:4" content="Join Community" />
        <meta property="fc:frame:post_url" content="${DOMAIN}/api/frame" />
      </head>
      <body>
        <h1>Roadmap</h1>
        <p>Phase 1: Launch membership NFT.</p>
      </body>
    </html>
  `);
}

function renderBuy(res: NextApiResponse) {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="og:title" content="FrameForge — Buy Membership NFT" />
        <meta property="og:description" content="Mint your membership NFT to access the FrameForge marketplace." />
        <meta property="og:image" content="${DOMAIN}/og/screen4.png" />

        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="About" />
        <meta property="fc:frame:button:2" content="Roadmap" />
        <meta property="fc:frame:button:3" content="Buy Membership NFT" />
        <meta property="fc:frame:button:4" content="Join Community" />
        <meta property="fc:frame:post_url" content="${DOMAIN}/api/frame" />
      </head>
      <body>
        <h1>Buy Membership NFT</h1>
        <p>Click below to open the MiniApp and mint.</p>

        <a href="farcaster://app?url=${MINIAPP_URL}">
          <button style="padding: 14px 22px; font-size: 18px; border-radius: 12px; background:#00ffb8; border:none; cursor:pointer;">
            Mint Membership
          </button>
        </a>
      </body>
    </html>
  `);
}

function renderCommunity(res: NextApiResponse) {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="og:title" content="FrameForge — Community" />
        <meta property="og:description" content="Join FrameForge community on Farcaster and Discord." />
        <meta property="og:image" content="${DOMAIN}/og/screen2.png" />

        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="About" />
        <meta property="fc:frame:button:2" content="Roadmap" />
        <meta property="fc:frame:button:3" content="Buy Membership NFT" />
        <meta property="fc:frame:button:4" content="Join Community" />
        <meta property="fc:frame:post_url" content="${DOMAIN}/api/frame" />
      </head>
      <body>
        <h1>Community</h1>
        <p>Join our Discord & Farcaster community.</p>
      </body>
    </html>
  `);
}
