"use client";

import { Element } from 'react-scroll';

const funnelLayers = [
  {
    id: "top",
    title: "TOP OF FUNNEL – Discovery",
    platforms: "Instagram Reels, TikTok, YouTube Shorts, X",
    description: "Designed to capture attention with short-form vertical clips and viral formats. These platforms reward volume and timing. Content here generates the widest reach and is optimized for algorithmic discoverability."
  },
  {
    id: "middle",
    title: "MIDDLE OF FUNNEL – Engagement",
    platforms: "YouTube longform, Podcasts, Substack, Rumble",
    description: "Longer content builds trust, context, and emotional connection. This layer nurtures your audience into followers and brand loyalists through consistent narrative rhythm and deeper format storytelling."
  },
  {
    id: "bottom",
    title: "BOTTOM OF FUNNEL – Conversion",
    platforms: "Patreon, Merch, DTC Offers, Substack Paid",
    description: "This is where audience becomes customer. Whether through memberships, exclusive content, product sales, or affiliate links — this layer converts affinity into recurring revenue and long-term value."
  }
];

const ContentEcosystemSection = () => {
  return (
    <Element name="ecosystem" className="section section-black text-white py-32">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="title-large text-center mb-16">THE CONTENT ECOSYSTEM MODEL</h2>

        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 text-center mb-24">
            Every content business is a system. We design and operate ecosystems that turn creative output into revenue, IP value, and sustained audience growth — across platforms and over time. At the center of this model is an inverted tetrahedron: a three-layer publishing funnel where each layer deepens audience affinity and increases monetization efficiency. The more strategic the publishing, the greater the value captured.
          </p>

          <div className="relative pl-0 md:pl-4 space-y-20 md:space-y-24 mb-24">
            <div className="absolute left-0 top-3 bottom-3 w-px bg-white/10 hidden md:block" />

            {funnelLayers.map((layer, index) => {
              const widthClass = index === 0 ? 'w-full' : index === 1 ? 'w-[90%]' : 'w-[80%]';

              return (
                <div key={layer.id} className={`relative mx-auto ${widthClass}`}>
                  <div className="absolute left-0 top-3 w-3 h-3 -ml-[6.5px] rounded-full bg-white/30 hidden md:block" />

                  <div className="space-y-4 md:pl-8">
                    <h3 className="text-2xl md:text-3xl font-title tracking-tight">{layer.title}</h3>
                    <p className="text-gray-300 italic mb-5 font-content">{layer.platforms}</p>
                    <p className="text-base md:text-lg leading-relaxed text-gray-200">{layer.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-200 text-center">
              This strategic publishing model is the foundation of volumetric value. It's how creator-led media businesses capture the full upside of attention — and why vertical integration creates superior economics.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContentEcosystemSection;
