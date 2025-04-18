"use client";

import { Element } from 'react-scroll';

const AboutSection = () => {
  return (
    <Element name="about" className="section section-black text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="title-large text-center">
            ALLEZ PLUS LOIN
          </h2>
          <div className="space-y-8 text-center">
            <p className="subtitle">
              Founded by Gaëlle Perrin, our agency brings together expertise in luxury marketing, editorial content, and strategic communications.
            </p>
            <p className="subtitle">
              With over a decade of experience working with prestigious brands in the lifestyle sector, we offer a unique perspective and approach.
            </p>
            <p className="subtitle">
              Our team of specialists is dedicated to creating authentic and impactful communication strategies that elevate brands to new heights.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutSection;
