"use client";

import { Element } from 'react-scroll';

interface SystemRole {
  id: string;
  title: string;
  description: string;
}

const systemRoles: SystemRole[] = [
  {
    id: "analyst",
    title: "The Analyst",
    description: "Tracks performance metrics and builds scalable revenue models — a role most creators lack. We provide this function, transforming content intuition into business intelligence."
  },
  {
    id: "operator",
    title: "The Operator",
    description: "Executes production workflows and maintains delivery calendars. Our systems have generated hundreds of thousands of watch hours with minimal overhead."
  },
  {
    id: "builder",
    title: "The Builder",
    description: "Oversees the creative execution of your core product — from idea to delivery. This includes scripting, directing, and shaping the production process to match your vision and platform needs."
  },
  {
    id: "seller",
    title: "The Seller",
    description: "Converts audience into revenue through brand deals, subscriptions, or products. Your strengths as a creator and the stories you tell will determine monetization strategy: celebrities leverage their name, experts sell insights, while others require comprehensive sales infrastructure."
  },
  {
    id: "storyteller",
    title: "The Storyteller",
    description: "Transforms content into cultural meaning. In most cases, this will be the creator. We support this role by helping translate your creative instincts into repeatable narrative strategies that resonate and grow."
  }
];

const RoleCard = ({ role }: { role: SystemRole }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Placeholder for dodecahedron face glyph */}
      <div className="w-16 h-16 mb-6 rounded-full bg-white/10 flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-white/40 rounded-lg transform rotate-45" />
      </div>

      <h3 className="text-xl md:text-2xl font-title tracking-tight mb-4">
        {role.title}
      </h3>

      <p className="text-sm md:text-base text-gray-300 leading-relaxed font-content">
        {role.description}
      </p>
    </div>
  );
};

const TheSystemSection = () => {
  return (
    <Element name="system" className="section section-black text-white py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Title and intro paragraph - left aligned */}
        <div className="mb-20 md:mb-24 max-w-2xl">
          <h2 className="title-large text-left mb-10">
            THE FIVE ROLES WITHIN A PLATONIC SYSTEM
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-prose">
            Platonic Systems operates on a fundamental truth: successful content businesses require exactly five roles. Most creators excel at one or two, failing at the rest. We identify your strengths and fill the critical gaps.
          </p>
        </div>

        {/* Dodecahedron divider icon */}
        <div className="flex justify-center mb-20 md:mb-24">
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              {/* Placeholder for dodecahedron icon */}
              <div className="w-12 h-12 border-2 border-white/30 rounded-lg transform rotate-45" />
            </div>
          </div>
        </div>

        {/* Five roles in columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-6 lg:gap-8">
          {systemRoles.map((role) => (
            <div key={role.id}>
              <RoleCard role={role} />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-28 max-w-3xl mx-auto px-4">
          <p className="text-lg text-center text-gray-200 leading-relaxed">
            Most creators naturally fill 1–2 roles. We provide the rest — ensuring your effort generates revenue, reach, and long-term IP value.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default TheSystemSection;
