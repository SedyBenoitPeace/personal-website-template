// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary-dark py-6 px-4 text-center">
      <div className="container mx-auto">
        <p className="text-text-muted text-sm">
          © {currentYear} John Developer. All rights reserved.
        </p>
        {/* Optional: Link back to top */}
        {/* <a href="#about" className="text-accent-orange hover:underline text-sm mt-2 inline-block">Back to Top</a> */}
      </div>
    </footer>
  );
};

export default Footer;