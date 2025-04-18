"use client";

import { Element, Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  return (
    <Element
      name="home"
      className="section section-white min-h-screen flex flex-col justify-center"
    >
      <div className="pt-16 md:pt-0 flex-grow flex items-center justify-center">
        <div className="max-w-screen-xl w-full px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <h1 className="hero-title">
              VOLUMETRIC MEDIA STRATEGIES FOR MODERN CREATORS
            </h1>
            <p className="hero-subtitle">
              Platonic Systems helps creators build sustainable media businesses.
              We provide production, editorial, and publishing services tailored
              to each creator's unique strengths and audience.
            </p>

            <ScrollLink
              to="system"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity mt-6"
              aria-label="Scroll to next section"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-2xl">↓</span>
              </div>
            </ScrollLink>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HeroSection;
