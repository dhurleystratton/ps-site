"use client";

import { Element } from 'react-scroll';

const archetypes = [
  {
    id: "typeA",
    title: "Type A: Narrative Storytellers",
    description: "Content creators who build their audience through long-form narrative content and serial storytelling across multiple platforms."
  },
  {
    id: "typeB",
    title: "Type B: Subject Matter Experts",
    description: "Focused on providing in-depth knowledge and analysis in specific domains, establishing authority through educational content."
  },
  {
    id: "typeC",
    title: "Type C: Creator-Curators",
    description: "Specialists in assembling, contextualizing, and presenting content from multiple sources, adding unique perspective and value."
  },
  {
    id: "typeD",
    title: "Type D: Digital Natives",
    description: "Platform-first creators who intuitively understand and leverage emerging formats and algorithms to build engaged communities."
  }
];

const CreatorArchetypesSection = () => {
  return (
    <Element name="archetypes" className="section section-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="title-large mb-16 text-center">THE FOUR CREATOR ARCHETYPES</h2>

        <div className="mb-12">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="subtitle">
              Understanding your core creator archetype helps define strategy, content approach, and monetization opportunities.
            </p>
          </div>

          {/* Placeholder for quadrant diagram */}
          <div className="w-full max-w-xl mx-auto aspect-square border border-gray-200 mb-16 flex items-center justify-center">
            <p className="text-gray-400 text-center">Quadrant Diagram Placeholder</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {archetypes.map((archetype) => (
            <div key={archetype.id} className="space-y-4">
              <h3 className="text-xl font-title uppercase">{archetype.title}</h3>
              <p className="text-gray-700">{archetype.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default CreatorArchetypesSection;
