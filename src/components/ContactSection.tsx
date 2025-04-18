"use client";

import { Element } from 'react-scroll';

const ContactSection = () => {
  return (
    <Element name="contact" className="section section-white py-32">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="title-large mb-16">
            LET'S BUILD YOUR ECOSYSTEM
          </h2>

          <div className="space-y-8 mb-16">
            <p className="text-lg md:text-xl leading-relaxed">
              Platonic Systems works with a limited number of creators and brand partners each year. If you're ready to design a content system that scales — and you're serious about ownership, longevity, and IP value — we'd love to hear from you.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Want a head start? Share your social media, brand assets, or creative goals — and we'll review your presence to give you an honest audit of your strengths and opportunities.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center text-lg md:text-xl font-medium hover:opacity-80 transition-opacity"
            >
              <span className="mr-2">→</span> Reach out to start a conversation
            </a>
          </div>

          {/* Space reserved for future form or interactive elements */}
          <div className="h-12 md:h-16" />
        </div>
      </div>
    </Element>
  );
};

export default ContactSection;
