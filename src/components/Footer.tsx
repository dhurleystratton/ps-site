"use client";

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-8 lg:px-12 bg-white text-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            <p className="text-xs font-light">© {new Date().getFullYear()} GP Communication</p>
          </div>

          <div className="flex space-x-8 md:space-x-12">
            <a href="mailto:info@example.com" className="text-xs font-light hover:opacity-70 transition-opacity">
              contact@example.com
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs font-light hover:opacity-70 transition-opacity">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs font-light hover:opacity-70 transition-opacity">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
