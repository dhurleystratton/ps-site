"use client";

import { Element } from 'react-scroll';

const PhilosophySection = () => {
  return (
    <Element name="philosophy" className="section section-white py-32">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="title-large text-center mb-20">
          OUR PHILOSOPHY
        </h2>

        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              Platonic Systems emerged from deep experience in both traditional and creator media. After a decade running Joe Roth's television business and executive producing projects like <em>United States vs. Billie Holiday</em> and <em>The Plot Against America</em>, I saw the writing on the wall.
            </p>

            <p className="text-lg leading-relaxed">
              Technology was giving creators direct access to their audience — and the chance to own their IP. But the infrastructure needed to support them didn't exist. That's why I built Platonic Systems: to give creators what studios never could — a system that turns ideas into scalable businesses.
            </p>

            <p className="text-lg leading-relaxed">
              We start by identifying how a creator best connects with their audience:
            </p>

            <ul className="space-y-3 pl-5 list-disc text-lg leading-relaxed">
              <li>Through narrative storytelling</li>
              <li>By sharing specialized knowledge</li>
              <li>By curating conversations and culture</li>
              <li>Through consistent digital engagement</li>
            </ul>

            <p className="text-lg leading-relaxed">
              From there, we build systems designed to scale. Everything we do is structured to increase audience affinity, drive monetization, and preserve ownership. This is not a service — it's a partnership built for growth.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default PhilosophySection;
