import React from "react";

const TechBanner = () => {
  const techCompanies = [
    { name: "DIGI-TECH", tagline: "tagline here" },
    { name: "TECH-LIFE", tagline: "company tagline" },
    { name: "SUN-TECH", tagline: "tech slogan" },
    { name: "hi-TECH", tagline: "your tagline" },
  ];

  return (
    <div className="relative bg-[#0F172A] text-white py-8 px-6 flex justify-center font-playfair">
      {/* Custom banner shape */}
      <div className="absolute inset-0 flex items-center justify-between">
        <div className="w-12 h-12 bg-[#0F172A] clip-left"></div>
        <div className="w-12 h-12 bg-[#0F172A] clip-right"></div>
      </div>

      {/* Tech Logos */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-10 w-full max-w-5xl">
        {techCompanies.map((company, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="text-5xl text-violet-600">🔗</span> {/* Placeholder icon */}
            <h3 className="text-lg font-bold mt-2">
              {company.name.split("-")[0]}
              <span className="text-violet-600">{company.name.split("-")[1]}</span>
            </h3>
            <p className="text-sm text-gray-400">{company.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBanner;
