"use client";

import { Element } from 'react-scroll';
import { useEffect, useRef } from 'react';

// Case studies data
const caseStudies = [
  {
    id: "real-ones",
    title: "Real Ones",
    description: "Built from scratch, Real Ones became a multi-platform, audience-first media brand reaching millions monthly. With no paid ad spend and starting from zero subscribers, the YouTube channel hit 1M+ subs and delivered 282 uploads, earning 64M+ views and 665M+ impressions with over 6.7M minutes watched. The podcast reached 10M listens across 72 episodes. Patreon, launched mid-Season 1, drove 50% of the show's total revenue — proving the value of owned audience and direct support infrastructure.",
    imageUrl: "/images/case-studies/real-ones-collage.jpg",
    ctaLink: "https://youtu.be/2hyB6osDDOg?si=Bh0skLHHZU5Z3Bzr",
    altText: "Collage of Real Ones podcast guests and moments"
  },
  {
    id: "hotboxin",
    title: "Hotboxin",
    description: "Hotboxin' proved creator-first media could outperform studio platforms. We produced 94 episodes and built a system that turned Mike Tyson's voice into viral, recurring content — earning 113M+ YouTube views at a time before Shorts even existed. The infrastructure supported lean, high-output publishing at scale, creating an evergreen cultural library that continues to perform across search and suggested algorithms.",
    imageUrl: "/images/case-studies/hotboxin-collage.jpg",
    ctaLink: "https://www.youtube.com/watch?v=jUMvdv-5zyI",
    altText: "Collage of Hotboxin podcast moments with Mike Tyson and guests"
  },
  {
    id: "behind-the-mike",
    title: "Behind the Mike",
    description: "With no prior pipeline or strategy, we transformed unused behind-the-scenes footage into a monetizable campaign supporting Tyson's return to the ring. The 71-day rollout spanned YouTube, TikTok, X, and Instagram, earning 81.5M impressions, 16.2M views, and 287K watch hours. More importantly, it unlocked a new narrative rhythm that drove merchandise store traffic and long-tail IP licensing value.",
    imageUrl: "/images/case-studies/behind-the-mike-collage.jpg",
    ctaLink: "https://youtu.be/rIOzG8Xd9gA?si=jo4BChgdH2tTWdKw",
    altText: "Collage of Mike Tyson's preparation and behind the scenes moments"
  }
];

const CaseStudiesSection = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set up the refs array
  const setRef = (el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  useEffect(() => {
    const handleScroll = () => {
      // Using for...of loop instead of forEach for better performance
      for (const ref of sectionRefs.current) {
        if (!ref) continue;

        const rect = ref.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;

        if (isVisible) {
          ref.classList.add('animate-fade-in');
        }
      }
    };

    // Initial animation with staggered delay
    const animateInitiallyVisible = () => {
      const firstRef = sectionRefs.current[0];
      if (firstRef) {
        setTimeout(() => {
          firstRef.classList.add('animate-fade-in');
        }, 300);
      }
    };

    // Initial check after a slight delay to ensure layout is settled
    const timeoutId = setTimeout(() => {
      handleScroll();
      animateInitiallyVisible();
    }, 100);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Element name="case-studies" className="section section-black text-white py-36 md:py-44">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8">
        <h2 className="title-large text-center mb-36 md:mb-44 tracking-tight">CASE STUDIES</h2>

        <div className="space-y-64 md:space-y-80">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="case-study-block"
              id={study.id}
              ref={(el) => setRef(el, index)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col">
                <div className="w-full mb-16 md:mb-24">
                  <div className="mx-auto overflow-hidden" style={{ maxWidth: '1100px' }}>
                    <img
                      src={study.imageUrl}
                      alt={study.altText}
                      className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>

                <div className="w-full max-w-[680px] mx-auto text-center md:text-left">
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-title tracking-tight mb-12 leading-tight">
                    {study.title}
                  </h3>

                  <p className="text-lg md:text-xl text-zinc-300 font-content leading-relaxed mb-14 tracking-wide">
                    {study.description}
                  </p>

                  <div className="text-center md:text-left">
                    <a
                      href={study.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-base md:text-lg text-white group relative"
                    >
                      <span className="inline-flex items-center transition-all duration-300 group-hover:text-zinc-300">
                        <span className="mr-2">Check it out</span>
                        <span className="arrow text-xs transform transition-transform duration-500 group-hover:translate-x-1">→</span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default CaseStudiesSection;
