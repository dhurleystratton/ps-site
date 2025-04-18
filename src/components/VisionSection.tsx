"use client";

import { Element } from 'react-scroll';

const VisionSection = () => {
  return (
    <Element name="vision" className="section section-black text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="title-large text-center">
            OUR VISION
          </h2>
          <div className="space-y-6 text-center">
            <p className="subtitle">
              We believe in the power of authentic communication that resonates with discerning audiences.
            </p>
            <p className="subtitle">
              Our approach is guided by a deep understanding of luxury lifestyle markets and consumer behavior.
            </p>
            <p className="subtitle">
              We help brands articulate their unique voice and vision in a way that creates lasting connections with their audience.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default VisionSection;
