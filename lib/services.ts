import type { ComponentType } from "react";
import { IconSeo, IconWebsite, IconAds, IconBranding, IconContent, IconCrm } from "@/components/icons";

export type ProcessStep = {
  step: string;
  description: string;
};

export type WhoItsForSegment = {
  segment: string;
  scope: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  /** Expected hero background photo path under public/. Optional — no file needs to exist yet. */
  heroImage?: string;
  name: string;
  /** Short outcome-framed line used on homepage teaser cards and hub cards. */
  oneLiner: string;
  icon: ComponentType<{ className?: string }>;
  /** 'stub' pages get noindexed and excluded from the sitemap until flipped to 'live'. */
  status: "live" | "stub";
  heroHeadline: string;
  heroSubhead: string;
  problemHeading: string;
  problem: string;
  whatsIncluded: string[];
  process: ProcessStep[];
  whoItsFor: WhoItsForSegment[];
  relatedLocations: string[];
  pricingAnchor: string;
  faq: FaqItem[];
};

const GULF_LOCATIONS = [
  "Dubai",
  "Downtown Dubai",
  "Dubai Marina",
  "Business Bay",
  "JVC",
  "Palm Jumeirah",
  "Abu Dhabi",
  "Riyadh",
];

export const SERVICES: Service[] = [
  {
    slug: "real-estate-seo",
    heroImage: "/images/hero/services/real-estate-seo.jpg",
    name: "Real Estate SEO",
    oneLiner:
      "Own the search results your next buyer or investor is already typing — from off-plan launches to ready secondary-market listings.",
    icon: IconSeo,
    status: "live",
    heroHeadline: "Real estate SEO built to rank for what Gulf buyers actually search.",
    heroSubhead:
      "Community-level content, technical SEO, and portal backlinks — built around how Dubai real estate search actually splits by neighbourhood, not one generic city-wide campaign.",
    problemHeading: "Ranking in Dubai isn't one competition — it's dozens",
    problem:
      "Generic SEO treats a city as a single market. Real estate doesn't work that way here: ranking for “Downtown Dubai apartments” and ranking for “JVC apartments” are different fights, against different competitors, with different content expectations. An agency running one playbook across every community is optimising for the wrong fight in at least half of them.",
    whatsIncluded: [
      "Keyword research built around GCC buyer intent — not generic global search volume.",
      "On-page and technical SEO for every listing and location page.",
      "Community-level location pages (Downtown Dubai, Dubai Marina, JVC, and beyond) — not one generic city-wide page trying to rank for everything.",
      "Backlink development from the portals Gulf buyers actually trust: Bayut, Property Finder, Dubizzle.",
      "Core Web Vitals and mobile performance work — mobile-first matters more here than in most markets, since the majority of property searches in the Gulf happen on mobile.",
    ],
    process: [
      {
        step: "Audit",
        description:
          "We review current rankings, technical health, and content against every community you compete in — and check existing listings and ad copy for Trakheesi-compliant language before building anything new on top of it.",
      },
      {
        step: "Strategy",
        description:
          "Keyword and content priorities get mapped by community and property type, ranked by realistic ranking opportunity, not just search volume.",
      },
      {
        step: "Build",
        description:
          "Location pages, on-page fixes, technical SEO, and portal backlink outreach go live in priority order — highest-opportunity communities first.",
      },
      {
        step: "Track",
        description:
          "Rankings, organic leads, and cost-per-lead versus paid channels get reported monthly, tied to actual inquiries, not just position tracking.",
      },
    ],
    whoItsFor: [
      {
        segment: "Solo agent or broker",
        scope:
          "A handful of priority listings and one or two communities. Scope stays tight — usually a single location page cluster plus core technical fixes.",
      },
      {
        segment: "Brokerage",
        scope:
          "Multiple agents, multiple communities, and an existing listings pipeline. Scope expands to cover the full community set you operate in, plus backlink and content velocity to match a larger listings volume.",
      },
      {
        segment: "Developer running off-plan launches",
        scope:
          "A single project or masterplan that needs to rank fast around a launch date. Scope centers on one high-intent location page, aggressive technical setup, and content built around the launch timeline — not a slow multi-community build-out.",
      },
    ],
    relatedLocations: GULF_LOCATIONS,
    pricingAnchor:
      "SEO engagements typically run AED 3,000–6,000 per month for individual agents and brokers, scaling to AED 8,000–18,000+ per month for brokerages and multi-community developer campaigns. Exact scope depends on how many communities and listing types are in play — this is a starting anchor, not a quote.",
    faq: [
      {
        question: "How long until we see results?",
        answer:
          "Real estate SEO is not fast, and we will not tell you otherwise. Expect four to six months before meaningful ranking movement on competitive community terms, longer for the most contested searches like Downtown Dubai or Dubai Marina. Early wins on lower-competition community and long-tail terms can show sooner.",
      },
      {
        question: "What's actually different about Gulf SEO versus generic SEO?",
        answer:
          "The market structure. A handful of portals — Bayut, Property Finder, Dubizzle — dominate organic real estate search here in a way that has no real equivalent in most Western markets, buyer search behaviour splits heavily by nationality and mobile usage, and community-level competition is far more fragmented than a typical single-city SEO campaign accounts for.",
      },
      {
        question: "Does this include Arabic content?",
        answer:
          "Not yet, specifically for SEO content. Our Arabic-language creative capability today is focused on paid and brand campaigns. Arabic-language SEO content is on the roadmap — tell us if it's critical for your timeline and we'll be direct about where that stands.",
      },
      {
        question: "What's NOT included?",
        answer:
          "Paid search and social campaigns (Google and Meta) are a separate service — this is organic ranking work only. It also doesn't include paid backlink schemes or content mills; every location page and backlink comes from real research and real outreach, which is part of why the timeline above is realistic instead of oversold.",
      },
    ],
  },
  {
    slug: "website-landing-pages",
    heroImage: "/images/hero/services/website-landing-pages.jpg",
    name: "Website & Landing Page Design",
    oneLiner:
      "Launch sites and landing pages built to convert inquiries into qualified leads, not just impress in a pitch deck.",
    icon: IconWebsite,
    status: "live",
    heroHeadline: "Landing pages built to load fast and convert on the phone screens Gulf buyers actually use.",
    heroSubhead:
      "Mobile-first project and property pages built for Core Web Vitals, with WhatsApp click-to-chat as a standing conversion path, not a bolted-on afterthought.",
    problemHeading: "Most agency landing pages are built for a screen nobody in this market is using",
    problem:
      "The majority of real estate search and inquiry traffic in the Gulf happens on mobile, often on inconsistent connections — yet most template landing pages are still designed and tested on desktop first, with a WhatsApp button, if there's one at all, added as an afterthought icon rather than a real conversion path. A slow-loading, desktop-first page doesn't just look dated here — it actively loses inquiries before they reach a form.",
    whatsIncluded: [
      "Mobile-first design and build, tested against Core Web Vitals from the first draft, not patched after launch.",
      "WhatsApp click-to-chat built in as a primary conversion path, alongside — not instead of — a standard inquiry form.",
      "Page structure built to carry Trakheesi-compliant listing content and permit disclosures from day one.",
      "Fast-loading image and video handling suited to inconsistent mobile connections, not just fast office Wi-Fi.",
      "Launch and evergreen project pages both covered — a single-property launch page and a standing brokerage site are different builds, scoped differently.",
    ],
    process: [
      {
        step: "Brief",
        description:
          "We map the actual buyer journey for this page — mobile entry point, WhatsApp habit, and what Trakheesi-compliant listing or launch content needs to include — before a single wireframe gets drawn.",
      },
      {
        step: "Design",
        description:
          "Wireframes and design get built mobile-first and reviewed against real phone screens, not a desktop mockup scaled down after the fact.",
      },
      {
        step: "Build",
        description:
          "Development prioritises load speed and Core Web Vitals from the first commit, with WhatsApp click-to-chat and inquiry forms wired in from the start.",
      },
      {
        step: "Launch",
        description:
          "Pages go live with permit numbers and disclosures already in place, and get checked against real mobile network conditions before handover, not just a fast office connection.",
      },
    ],
    whoItsFor: [
      {
        segment: "Solo agent or broker",
        scope: "A single high-converting listing or personal brand page. Scope stays lean — one to a handful of pages, built fast.",
      },
      {
        segment: "Brokerage",
        scope:
          "A standing site covering an active listings pipeline and multiple agents. Scope expands to a full site structure, not just one page.",
      },
      {
        segment: "Developer running off-plan launches",
        scope:
          "A dedicated launch page built to a hard date, designed to convert paid traffic at volume during a specific campaign window — different urgency and structure than an evergreen brokerage site.",
      },
    ],
    relatedLocations: GULF_LOCATIONS,
    pricingAnchor:
      "Landing page and website builds typically run AED 5,000–15,000 for a single launch or listing page, scaling to AED 15,000–35,000 for a full brokerage site with multiple agent pages and an integrated listings feed. This is a build cost, not a monthly retainer — ongoing hosting and updates are scoped separately.",
    faq: [
      {
        question: "How fast will the page actually load on mobile?",
        answer:
          "Every build is tested against Core Web Vitals on real mobile network conditions, not just fast office Wi-Fi, since the majority of traffic here is mobile and often on inconsistent connections. We won't promise a specific score before seeing the content and imagery involved, but speed is a build requirement, not an afterthought.",
      },
      {
        question: "Do you build in WhatsApp, or is that extra?",
        answer:
          "It's built in as standard. WhatsApp click-to-chat is the primary conversion path for most Gulf real estate inquiries, so it's part of the base build alongside a standard form, not an add-on.",
      },
      {
        question: "Is the listing content automatically Trakheesi-compliant?",
        answer:
          "The page structure is built to carry compliant listing content and permit disclosures — the actual permit numbers and copy still need to come from your RERA/DLD-registered listing details. We build the framework correctly; we're not a substitute for your own registration.",
      },
      {
        question: "Can this integrate with our existing CRM or portal feeds?",
        answer:
          "In most cases yes, and we'll tell you directly during scoping if a specific integration isn't feasible. Ask about your specific CRM or portal feed before we start — it changes the build slightly.",
      },
    ],
  },
  {
    slug: "paid-ads",
    heroImage: "/images/hero/services/paid-ads.jpg",
    name: "Paid Ads (Google + Meta)",
    oneLiner:
      "Campaigns targeted at buyers who can actually close — by nationality, income bracket, and intent, not just by click.",
    icon: IconAds,
    status: "live",
    heroHeadline: "Paid media built around how GCC buyers actually get targeted, not default platform categories.",
    heroSubhead:
      "Audience segmentation by nationality, income bracket, and life stage, launch-specific campaign structures for off-plan, and permit-compliant ad copy as a stated deliverable.",
    problemHeading: "Generic ad targeting wastes spend on people who were never going to buy here",
    problem:
      "Most paid campaigns in this region still run on default platform audience categories — broad age and interest targeting that treats a Gulf real estate buyer like any other. But the variables that actually predict who buys here are nationality, income bracket, and life stage, and off-plan launches in particular need a completely different spend curve than an evergreen listing campaign. Running one generic campaign structure across both wastes budget in both directions.",
    whatsIncluded: [
      "Audience segmentation built around nationality, income bracket, and life stage — not default platform interest categories.",
      "Off-plan launch campaign structures with a spend curve built around the launch date, distinct from evergreen listing campaigns.",
      "Permit-number-compliant ad copy as a stated deliverable, checked before launch, not after a complaint.",
      "Cross-platform management across Google and Meta, coordinated rather than run as two disconnected campaigns.",
      "Reporting tied to cost per qualified lead, not reach or impressions.",
    ],
    process: [
      {
        step: "Audience",
        description:
          "We define who this campaign actually needs to reach — by nationality, income bracket, and life stage — and check every planned ad against Trakheesi, RERA, and Madhmoun rules before copy gets finalised.",
      },
      {
        step: "Structure",
        description:
          "Campaign structure gets built around the actual goal — a launch date and spend curve for off-plan, or a steady always-on structure for standing listings — not a single generic template applied to both.",
      },
      {
        step: "Launch",
        description: "Ads go live with permit references already in place across every market they run in.",
      },
      {
        step: "Optimise",
        description:
          "Spend shifts toward what's converting, with reporting tied to cost per qualified lead rather than platform vanity metrics.",
      },
    ],
    whoItsFor: [
      {
        segment: "Solo agent or broker",
        scope: "A single always-on campaign around a handful of listings. Scope stays focused — one or two audience segments, modest daily spend.",
      },
      {
        segment: "Brokerage",
        scope: "Multiple concurrent campaigns across agents and listings. Scope expands to cross-campaign budget management and consolidated reporting.",
      },
      {
        segment: "Developer running off-plan launches",
        scope:
          "A launch-specific campaign structure built around a fixed date, with spend front-loaded for awareness and shifted to conversion as the date approaches — a fundamentally different curve than an ongoing listings campaign.",
      },
    ],
    relatedLocations: GULF_LOCATIONS,
    pricingAnchor:
      "Campaign management typically runs AED 4,000–10,000 per month for individual agents and brokers, scaling to AED 10,000–25,000 per month for brokerages or multi-project developer accounts. This covers strategy, setup, and optimisation — ad spend itself is budgeted and paid separately, on top of this figure.",
    faq: [
      {
        question: "How is targeting actually different here versus a standard Google or Meta campaign?",
        answer:
          "Audience segmentation is built around nationality, income bracket, and life stage — the variables that actually predict who buys real estate in this region — rather than the default platform categories most generic campaigns rely on.",
      },
      {
        question: "How do off-plan launch campaigns differ from ongoing listing ads?",
        answer:
          "A launch campaign is built around a hard date and a spend curve that front-loads awareness before the launch and shifts to conversion after — a different structure than an evergreen listing campaign optimising for steady lead flow.",
      },
      {
        question: "Is ad copy actually checked for permit compliance?",
        answer:
          "Yes — every ad carries the correct permit references for its market and is checked against Trakheesi, RERA, and Madhmoun rules before it goes live, not after a complaint. This is a stated deliverable, not something assumed to be someone else's job.",
      },
      {
        question: "Does the management fee include ad spend?",
        answer:
          "No — management and ad spend are separate line items. The figure above covers strategy, setup, and ongoing optimisation; media budget is planned and paid separately so you always know what's going to the platforms versus what's going to the work.",
      },
    ],
  },
  {
    slug: "branding-identity",
    heroImage: "/images/hero/services/branding-identity.jpg",
    name: "Branding & Identity",
    oneLiner:
      "Positioning and identity that read as credible to a seven-figure buyer before a single word of copy is written.",
    icon: IconBranding,
    status: "live",
    heroHeadline: "Brand identity built for a market where compliance literacy is a trust signal, not just visual polish.",
    heroSubhead:
      "Positioning, identity, and messaging for developers and brokerages entering or competing in a market that reads credibility as closely as it reads design.",
    problemHeading: "A polished logo doesn't fix a credibility problem",
    problem:
      "Developers and brokerages entering this market are judged on more than visual polish — buyers and partners are also reading for compliance literacy and portal presence as trust signals. A beautifully designed identity that ignores how credibility actually gets established here looks confident right up until someone checks the registration details.",
    whatsIncluded: [
      "Positioning strategy grounded in how credibility actually gets established in this market, not generic brand workshop language.",
      "Logo, visual identity, and brand guidelines built to hold up across a launch campaign, a website, and print collateral alike.",
      "Messaging framework that accounts for compliance literacy as a trust signal, not just a visual one.",
      "Core templates — presentations, brochures, signage — so the identity actually gets used consistently, not delivered as a style guide nobody opens.",
      "Bilingual consideration for Arabic-market materials where relevant, coordinated with native-language review.",
    ],
    process: [
      {
        step: "Discovery",
        description:
          "We look at the competitive set, the target buyer or partner profile, and how credibility actually gets read in this specific market before any visual direction starts.",
      },
      {
        step: "Concept",
        description: "Positioning and initial visual direction get developed together, not visual-first with strategy retrofitted afterward.",
      },
      {
        step: "Design",
        description: "Full identity system — logo, guidelines, and core templates — gets built out once direction is approved.",
      },
      {
        step: "Delivery",
        description:
          "Final files and templates get handed over with usage guidelines, so the identity stays consistent as different teams and vendors start using it.",
      },
    ],
    whoItsFor: [
      {
        segment: "Solo agent or broker",
        scope: "A personal brand refresh — logo, colour, and a simple template set for listings and social. Scope stays lean.",
      },
      {
        segment: "Brokerage",
        scope: "A full identity system that needs to work across many agents and listings consistently. Scope covers the fuller template set and usage guidelines.",
      },
      {
        segment: "Developer running off-plan launches",
        scope:
          "A project-specific identity for a single launch or masterplan, distinct from (and sometimes sitting alongside) the parent developer's own corporate identity.",
      },
    ],
    relatedLocations: GULF_LOCATIONS,
    pricingAnchor:
      "A core identity project — logo, brand guidelines, and core templates — typically runs AED 10,000–25,000 as a one-time engagement. Brokerages or developers needing an ongoing brand system across multiple projects can move to a retainer instead, typically AED 5,000–12,000 per month.",
    faq: [
      {
        question: "Why does compliance matter for a branding project?",
        answer:
          "Because in this market, trust signals matter as much as visual polish. A developer or brokerage's credibility gets judged partly on whether their materials read as compliant and established, not just whether the logo looks good — so positioning work accounts for that from the start, not as a legal afterthought bolted on later.",
      },
      {
        question: "Do you design the logo, or the full brand system?",
        answer:
          "Depends on scope, and we'll be direct about which you need. A logo alone rarely holds up across a launch campaign, a website, and signage — most engagements cover the fuller system: logo, guidelines, and core templates, not just a mark.",
      },
      {
        question: "How long does a branding project take?",
        answer:
          "A core identity project typically takes four to six weeks from kickoff to final files, longer if it's tied to a specific launch timeline that needs sign-off from multiple stakeholders on the client side.",
      },
      {
        question: "Is this a one-time project or ongoing?",
        answer:
          "Most engagements are a one-time project. Brokerages and developers running multiple projects over time sometimes move to a retainer instead, for ongoing brand consistency work — we'll tell you honestly which fits your situation.",
      },
    ],
  },
  {
    slug: "content-production",
    heroImage: "/images/hero/services/content-production.jpg",
    name: "Content (Photography, Drone, Video, 3D Tours)",
    oneLiner:
      "Visual assets built for buyers making major decisions remotely — often from another country, sight unseen.",
    icon: IconContent,
    status: "live",
    heroHeadline: "Content built to replace a site visit, for buyers who are never going to make one.",
    heroSubhead:
      "Video-first photography, drone, and 3D tour production for remote and off-plan buyers deciding long-distance, not domestic listing photography repurposed for a harder job.",
    problemHeading: "Domestic real estate photography doesn't answer a remote buyer's real question",
    problem:
      "A buyer touring a property in person forms their own impression of scale, light, and flow. A buyer deciding remotely — often on an off-plan unit that doesn't exist yet — is relying entirely on the content to answer questions a site visit would normally cover. Standard listing photography, built for a buyer who'll walk the space anyway, is a different brief from content built to replace that visit.",
    whatsIncluded: [
      "Photography and drone coverage for completed units and masterplans, shot for buyers deciding remotely.",
      "Video content built to replace a site visit — showing scale, light, and flow, not just static angles.",
      "3D renders and virtual tours for off-plan units that don't physically exist yet.",
      "Content briefed and delivered in formats ready for paid campaign use, not a generic asset dump.",
      "Turnaround planning around drone and access lead time, not a last-minute request.",
    ],
    process: [
      {
        step: "Brief",
        description: "We plan the shoot around what a remote or off-plan buyer actually needs to see — scale, light, view, and flow — not a generic shot list.",
      },
      {
        step: "Schedule",
        description: "Drone, access, and weather lead time get planned in ahead of any hard launch date, not left until the week before.",
      },
      {
        step: "Produce",
        description:
          "Photography, drone, video, and 3D work get produced against the brief, with off-plan units covered through renders and tours rather than on-site shooting.",
      },
      {
        step: "Deliver",
        description: "Final assets are delivered in formats ready for the site, listing portals, and paid campaigns they're intended for.",
      },
    ],
    whoItsFor: [
      {
        segment: "Solo agent or broker",
        scope: "A single listing shoot — photography and maybe drone coverage for one or two properties. Scope stays small and fast.",
      },
      {
        segment: "Brokerage",
        scope: "Ongoing content coverage across an active listings pipeline, scoped as a standing arrangement rather than one-off shoots.",
      },
      {
        segment: "Developer running off-plan launches",
        scope:
          "3D renders, virtual tours, and launch video built around units that don't exist yet, timed to a specific launch date rather than an ongoing shoot schedule.",
      },
    ],
    relatedLocations: GULF_LOCATIONS,
    pricingAnchor:
      "Content packages typically start around AED 3,000–8,000 per property or launch for photography and drone coverage, scaling to AED 10,000–25,000+ for full video and 3D tour packages on larger launches. Ongoing content retainers for brokerages with continuous listing volume are scoped separately.",
    faq: [
      {
        question: "Why does remote or international buying change the content brief?",
        answer:
          "Because the buyer often can't visit in person before deciding. Video and 3D tours have to do the work a site visit would normally do — showing scale, light, and flow, not just a series of static angles — which is a genuinely different brief than photography for a buyer who'll walk the property anyway.",
      },
      {
        question: "Do you cover off-plan properties that don't physically exist yet?",
        answer: "Yes, through 3D renders and virtual tours rather than on-site photography — a different production process than shooting a completed unit, and scoped separately.",
      },
      {
        question: "How fast can content be delivered before a launch?",
        answer:
          "Turnaround depends on scope, but launch-critical content should be booked several weeks ahead of a launch date, not the week before — drone and video work in particular need weather and access lead time that a rushed timeline doesn't allow for.",
      },
      {
        question: "Do you provide the content, or also the ad campaigns using it?",
        answer:
          "Content production and paid media are separate services, though they're built to work together — content shot for this service is specifically brief-ready for use in paid campaigns, not a generic asset library.",
      },
    ],
  },
  {
    slug: "crm-automation",
    heroImage: "/images/hero/services/crm-automation.jpg",
    name: "CRM & Marketing Automation",
    oneLiner:
      "Every inquiry logged, routed, and followed up on schedule — not left sitting in an agent's WhatsApp.",
    icon: IconCrm,
    status: "live",
    heroHeadline: "WhatsApp-first CRM built for a market that never really used email to close deals.",
    heroSubhead:
      "Lead routing and follow-up automation built around WhatsApp as the primary channel, with pipeline tracking from first inquiry to close, integrated with tools like GoHighLevel.",
    problemHeading: "A lead lost in a WhatsApp thread is a lead lost, period",
    problem:
      "Most brokerages here run lead follow-up through personal WhatsApp chats spread across multiple agents' phones, with no shared record of who followed up, when, or what was promised. It works until volume increases even slightly, at which point inquiries quietly stop getting answered and nobody notices until the lead is gone.",
    whatsIncluded: [
      "WhatsApp-first automation for lead follow-up, with email as a secondary channel, not the reverse.",
      "Pipeline tracking from first inquiry through to close, visible across agents rather than locked in individual phones.",
      "Integration with tools like GoHighLevel where that's already your stack, or platform recommendations if you're starting fresh.",
      "Lead routing rules built around your team structure — by agent, by listing, or by source.",
      "Reporting on response time and follow-up completion, not just lead volume.",
    ],
    process: [
      {
        step: "Map",
        description: "We map your current lead flow — where inquiries actually come in and what happens to them today — before designing anything new on top of it.",
      },
      {
        step: "Build",
        description: "Routing rules, WhatsApp automation, and pipeline stages get built around that real flow, not a generic out-of-the-box template.",
      },
      {
        step: "Connect",
        description: "Integrations with existing tools, such as GoHighLevel, get wired in, and team members get onboarded to the actual day-to-day workflow.",
      },
      {
        step: "Manage",
        description: "Ongoing routing and reporting get monitored and adjusted as lead volume and sources change, rather than left to drift once the initial setup is done.",
      },
    ],
    whoItsFor: [
      {
        segment: "Solo agent or broker",
        scope: "Simple WhatsApp automation and a basic pipeline for one person's lead flow. Scope stays minimal.",
      },
      {
        segment: "Brokerage",
        scope: "Multi-agent routing, shared pipeline visibility, and reporting across the team — the scope where a real CRM setup actually starts paying for itself.",
      },
      {
        segment: "Developer running off-plan launches",
        scope: "High-volume lead capture and routing built around a launch window, where inquiry volume spikes sharply and needs to be triaged fast rather than handled one contact at a time.",
      },
    ],
    relatedLocations: GULF_LOCATIONS,
    pricingAnchor:
      "CRM and automation setup typically runs AED 3,000–8,000 per month for individual agents and small teams, scaling to AED 8,000–20,000 per month for brokerages needing multi-agent routing and reporting. Third-party platform costs, such as GoHighLevel licensing, are separate from this fee.",
    faq: [
      {
        question: "Why WhatsApp instead of email for follow-up?",
        answer:
          "Because WhatsApp is where most real estate conversations in this market actually happen, not email. Automation is built around WhatsApp as the primary channel, with email as a secondary path, not the reverse.",
      },
      {
        question: "Do you build this inside GoHighLevel, or a different platform?",
        answer:
          "We build to integrate with tools like GoHighLevel where that's already your stack, and can advise on platform choice if you're starting from scratch. We're not tied to one platform by default.",
      },
      {
        question: "What happens to leads that don't convert immediately?",
        answer:
          "They stay in a tracked pipeline with scheduled follow-up, not a spreadsheet or a forgotten chat thread. Nurture sequences are built for the realistic multi-week or multi-month decision timeline real estate buyers actually take.",
      },
      {
        question: "Is this just software setup, or ongoing management?",
        answer:
          "Both are available, and we'll be clear about which you're scoping. Initial setup is a one-time project; many brokerages then keep us on to manage routing and reporting ongoing, since a CRM left unmanaged tends to drift back into the old habits it was meant to fix.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
