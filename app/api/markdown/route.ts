import { NextRequest, NextResponse } from 'next/server';

const SITE_MARKDOWN = `# OneClick Solutions — Australia's Trusted Digital Marketing Agency

## About
OneClick Solutions helps Australian businesses attract more customers, increase revenue, and dominate their market online.

## Services
- **SEO** — Search Engine Optimisation to rank higher on Google
- **Google Ads (PPC)** — Paid search campaigns that drive qualified leads
- **Social Media Marketing** — Organic and paid social across Meta, LinkedIn, TikTok
- **Web Design & Development** — Fast, conversion-optimised websites
- **Content Marketing** — SEO content that ranks and converts
- **Email Marketing** — Automated campaigns with measurable ROI
- **Analytics & Reporting** — Custom dashboards and data-driven decisions
- **App Marketing** — Growth strategies for mobile applications

## Contact
- Phone: +61 3 9000 0000
- Email: hello@oneclicksoultions.com.au
- Address: Level 5, 123 Collins Street, Melbourne VIC 3000
- Hours: Monday–Friday 9:00 AM – 6:00 PM AEST

## Enquiry
Submit an enquiry at: https://oneclicksoultions.com.au/contact/

## Links
- Homepage: https://oneclicksoultions.com.au/
- Services: https://oneclicksoultions.com.au/services/
- Portfolio: https://oneclicksoultions.com.au/portfolio/
- Blog: https://oneclicksoultions.com.au/blog/
- Team: https://oneclicksoultions.com.au/team/
- Careers: https://oneclicksoultions.com.au/careers/
`;

export async function GET(req: NextRequest) {
  const accept = req.headers.get('accept') || '';

  if (accept.includes('text/markdown')) {
    return new NextResponse(SITE_MARKDOWN, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  return NextResponse.redirect(new URL('/', req.url));
}
