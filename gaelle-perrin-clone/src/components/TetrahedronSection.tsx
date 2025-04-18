"use client";

import { Element } from 'react-scroll';

const TetrahedronSection = () => {
  return (
    <Element name="tetrahedron" className="section section-black text-white py-32">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="title-large text-center mb-20">
          WHY THE TETRAHEDRON
        </h2>

        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-200">
              Most media businesses operate in two dimensions: reach and price. This creates flat, fragile business models — where every audience member is treated the same, and growth depends on constant expansion.
            </p>

            <p className="text-lg leading-relaxed text-gray-200">
              Platonic Systems is built on a different idea: that creator businesses operate in three-dimensional space.
            </p>

            <ul className="space-y-4 pl-5 list-disc text-lg leading-relaxed text-gray-200">
              <li><strong>X-axis</strong>: Audience reach across platforms</li>
              <li><strong>Y-axis</strong>: Content units distributed</li>
              <li><strong>Z-axis</strong>: Monetization per unit of attention</li>
            </ul>

            <p className="text-lg leading-relaxed text-gray-200">
              These three dimensions form a tetrahedron — the simplest geometric shape capable of holding volume. It represents the core of our strategy:
            </p>

            <blockquote className="border-l-4 border-white/30 pl-6 py-2 my-8">
              <p className="text-xl italic leading-relaxed text-gray-100">
                We don't just help creators grow — we help them build volumetric systems that scale in value over time.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default TetrahedronSection;
