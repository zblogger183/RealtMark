export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2026-08-04" */
  publishedDate: string;
  content: ContentBlock[];
  /** References Service.slug in lib/services.ts */
  relatedServiceSlugs: string[];
  /** Slash-joined location paths, e.g. "uae/dubai/jvc", resolved via getAreaByPath */
  relatedLocationSlugs: string[];
  /** 'stub' posts get noindexed and excluded from the sitemap until flipped to 'live'. */
  status: "live" | "stub";
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "real-estate-seo-for-dubai-developers",
    title: "Real Estate SEO for Dubai Developers",
    excerpt:
      "Ranking for a Dubai launch and ranking as a national brand are different problems. Why community-level SEO structure matters more than domain authority for most developer campaigns.",
    publishedDate: "2026-07-10",
    status: "live",
    content: [
      {
        type: "paragraph",
        text: "A developer launching a tower in Downtown Dubai and a developer launching a project in JVC are, from an SEO standpoint, playing two different games — even if they're the same company running both. Generic SEO advice treats a city as one market with one competitive set. Real estate buyers don't search that way, and Google's results don't reward that way either.",
      },
      { type: "heading", text: "The community-level problem" },
      {
        type: "paragraph",
        text: "Search intent in Dubai real estate is overwhelmingly community-specific. Someone searching “apartments for sale Downtown Dubai” and someone searching “apartments for sale JVC” are looking for genuinely different products at genuinely different price points, served by different sets of competing listings and portals. A single generic “Dubai apartments” page — the kind most developer websites default to — doesn't rank meaningfully for either search, because it isn't specific enough to satisfy the intent behind it.",
      },
      { type: "heading", text: "What this actually means for a launch" },
      {
        type: "paragraph",
        text: "For an off-plan launch specifically, the practical implication is that community-level content needs to exist before the launch goes live, not get retrofitted afterward once someone notices organic traffic isn't showing up. A dedicated page for the specific community — built with the kind of on-page depth a directory listing on a portal can't match — is what gives a launch any realistic chance of ranking organically inside a six-month window, rather than relying entirely on paid media to manufacture visibility indefinitely.",
      },
      { type: "heading", text: "Two communities, two different fights" },
      {
        type: "paragraph",
        text: "Downtown Dubai and Dubai Marina are useful examples of how differently this plays out. Downtown competes on brand and address prestige as much as on price, so content built for a Downtown launch has to work harder to differentiate against other branded-residence developments chasing the same small set of head terms. Dubai Marina is a higher-turnover market with heavier competition from resale listings and short-term-rental content, so the SEO priority shifts toward consistent publishing velocity over a single perfectly optimised page. Neither problem is solved by the same generic template.",
      },
      { type: "heading", text: "Where paid media fits" },
      {
        type: "paragraph",
        text: "None of this replaces paid search and social — it complements it. SEO is the slower-building, compounding channel; paid media is what carries lead volume while the organic content matures. A developer campaign that leans on paid alone for the first six months while SEO work runs in parallel tends to land in a much stronger position at month seven than one that starts SEO only after paid spend has already proven the demand exists.",
      },
      {
        type: "paragraph",
        text: "If you're planning a launch and want the SEO structure in place before it goes live rather than after, that's exactly what our real estate SEO service is built around.",
      },
    ],
    relatedServiceSlugs: ["real-estate-seo"],
    relatedLocationSlugs: ["uae/dubai/downtown-dubai", "uae/dubai/dubai-marina"],
  },
  {
    slug: "whatsapp-automation-for-broker-follow-up",
    title: "WhatsApp Automation for Broker Follow-Up",
    excerpt:
      "Most brokerages already run follow-up through WhatsApp — informally, on individual agents' phones. What actually changes when that becomes a system instead of a habit.",
    publishedDate: "2026-07-24",
    status: "live",
    content: [
      {
        type: "paragraph",
        text: "Walk into almost any brokerage in Dubai and the actual CRM — the real one, not the one on the license — is a collection of WhatsApp chats spread across however many agents are currently employed there. It works, in the sense that deals still close. It also means every lead's fate depends entirely on which agent's phone it landed on, and whether that agent was paying attention that week.",
      },
      { type: "heading", text: "What breaks first" },
      {
        type: "paragraph",
        text: "The failure mode isn't dramatic. Nobody loses a lead in an obvious way. What actually happens is slower: response times drift from minutes to hours as agents get busy, follow-up sequences depend entirely on individual memory rather than any system, and when an agent leaves, their open conversations leave with them. None of this shows up in a monthly report, because there's no report — which is itself the problem.",
      },
      { type: "heading", text: "What changes with real automation" },
      {
        type: "paragraph",
        text: "Moving WhatsApp from habit to system doesn't mean replacing it — WhatsApp stays the channel, because it's where the conversations already happen and where GCC buyers actually expect to be reached. What changes is that every inquiry gets logged and routed the moment it arrives, follow-up sequences run on a schedule instead of a memory, and a lead that's gone quiet for a week gets flagged instead of forgotten. The agent still has the conversation; the system just makes sure the conversation happens on time and that someone can see it happened at all.",
      },
      { type: "heading", text: "Where this actually pays off" },
      {
        type: "paragraph",
        text: "The payoff scales with volume, which is why this matters more for a brokerage than for a single agent working their own small pipeline. A solo agent can usually keep a mental map of who they're following up with. A brokerage running a dozen agents against a shared listings pipeline can't — and that's exactly the point where an informal WhatsApp habit stops being a workable system and starts quietly losing leads nobody notices are gone.",
      },
      {
        type: "paragraph",
        text: "This is the same problem our CRM and marketing automation service is built to solve — WhatsApp-first, built around how follow-up actually happens here rather than an email-first template borrowed from a different market.",
      },
    ],
    relatedServiceSlugs: ["crm-automation"],
    relatedLocationSlugs: [],
  },
  {
    slug: "marketing-an-off-plan-project-in-jvc-vs-downtown-dubai",
    title: "Marketing an Off-Plan Project in JVC vs. Downtown Dubai",
    excerpt:
      "Same off-plan launch playbook, two communities, two genuinely different campaigns. Why the buyer, the price story, and the channel mix all shift between JVC and Downtown Dubai.",
    publishedDate: "2026-08-04",
    status: "live",
    content: [
      {
        type: "paragraph",
        text: "The same off-plan launch playbook doesn't survive contact with two different communities. A launch in JVC and a launch in Downtown Dubai both need a landing page, a paid campaign, and a content plan — but almost everything about what goes into each one changes once you look at who's actually buying and why.",
      },
      { type: "heading", text: "The buyer is a different person" },
      {
        type: "paragraph",
        text: "A JVC launch is selling primarily to yield-focused investors comparing rental return across a large field of similarly priced units — many of them buying their second or third Dubai property, price-sensitive, and fluent in comparing service charges and expected rental yield line by line. A Downtown launch is selling to a mix of high-net-worth end users and short-term-rental investors who are paying partly for the address itself, and who are comparing this launch against other branded, prestige-anchored developments rather than against a field of near-identical mid-market towers.",
      },
      { type: "heading", text: "The price story flips" },
      {
        type: "paragraph",
        text: "In JVC, the price conversation is the campaign — rental yield, service charge transparency, and payment plan flexibility are the actual selling points, and avoiding a direct price comparison would be a mistake, because the buyer is going to make that comparison anyway. In Downtown, leading with price undersells the product; the campaign needs to establish why the address and the brand justify the premium before price becomes the conversation at all. Running the JVC price-forward approach in a Downtown campaign reads as downmarket. Running the Downtown prestige-forward approach in JVC reads as evasive.",
      },
      { type: "heading", text: "Channel mix and volume" },
      {
        type: "paragraph",
        text: "JVC's high listing turnover means the paid media job is largely about maintaining constant visibility against a competitive set that refreshes weekly — this favours an always-on, higher-frequency paid structure and SEO content built to compete directly on community search terms. Downtown's lower transaction volume and higher ticket size favour a more concentrated, precision-targeted paid campaign aimed at a smaller number of qualified high-net-worth inquiries, with SEO playing a longer, more patient role given how contested Downtown-specific search terms already are.",
      },
      { type: "heading", text: "Content does a different job" },
      {
        type: "paragraph",
        text: "JVC content earns attention by being specific and comparable — real layouts, real service charges, real numbers, because that's what the buyer is actually evaluating. Downtown content earns attention by being precise about brand and view, because the buyer is paying for a feeling as much as a floor plan, and generic tower photography undersells a premium address the same way an overly polished lifestyle shoot would feel dishonest pointed at a JVC yield buyer.",
      },
      { type: "heading", text: "Same playbook, different campaign" },
      {
        type: "paragraph",
        text: "None of this means the underlying process changes — audit, strategy, build, launch, track still applies to both. What changes is every decision inside that process: which channels carry the weight, what the creative actually says, and what counts as a qualified lead in the first place. Treating a JVC launch and a Downtown launch as the same campaign with a different address swapped in is exactly the kind of generic execution that underperforms in both markets at once.",
      },
      {
        type: "paragraph",
        text: "Both of these are live examples on this site, not hypotheticals — see how the JVC and Downtown Dubai pages themselves are positioned differently, and how our real estate SEO and paid ads services adapt to each.",
      },
    ],
    relatedServiceSlugs: ["real-estate-seo", "paid-ads"],
    relatedLocationSlugs: ["uae/dubai/jvc", "uae/dubai/downtown-dubai"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getLiveBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.status === "live").sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}
