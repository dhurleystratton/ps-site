"use client";

import { Element, Link } from 'react-scroll';

interface Service {
  id: string;
  type: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "strategy",
    type: "Fixed Project Cost",
    title: "Ecosystem Strategy Consulting & Planning",
    description: "A clear, minimum-viable story. A defined audience. A publishing plan built to sustain. We start by mapping your creative foundation and defining the roles every content ecosystem needs to function — from editorial and programming to publishing and performance."
  },
  {
    id: "production",
    type: "Fixed Project Cost",
    title: "Production Services & Content Management",
    description: "We build and manage production pipelines that match the project's creative scope, budget, and cadence. From shoot prep to post, we ensure your process is consistent and your output is usable across platforms."
  },
  {
    id: "post-production",
    type: "Fixed Project Cost",
    title: "Post-Production & Editorial",
    description: "Each platform has its own language. We cut and format raw footage into native content for TikTok, YouTube, Instagram, and more — optimizing each asset for visibility, clarity, and tone."
  },
  {
    id: "publishing",
    type: "Monthly Retainer",
    title: "Multi-Platform Publishing & Format Optimization",
    description: "We manage the release process. That includes export formatting, thumbnails, scheduling, and copy — so that each post is ready to perform and reach its intended audience."
  },
  {
    id: "revenue",
    type: "Monthly Retainer",
    title: "Audience Funnel & Revenue Strategy",
    description: "We help you build a clear path from viewership to community to conversion — through memberships, merchandise, or direct sales. Each content piece is designed to move your audience one step closer."
  }
];

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] h-full"
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="w-12 h-12 mb-4 rounded-full bg-gray-100" />

        <span className="text-sm text-gray-500 mb-2 font-content">{service.type}</span>

        <h3 className="text-xl font-title tracking-tight mb-4">{service.title}</h3>

        <p className="text-base leading-relaxed text-gray-700 font-content mb-6 flex-grow">{service.description}</p>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-600 cursor-pointer font-content transition-colors"
          >
            Request Pricing →
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <Element name="services" className="section section-white py-32">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="title-large text-center mb-20">CREATIVE SERVICES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.id === 'revenue' ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default ServicesSection;
