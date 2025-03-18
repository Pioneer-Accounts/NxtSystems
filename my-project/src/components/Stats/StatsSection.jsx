import React from "react";

const StatsSection = () => {
  const stats = [
    { icon: "📊", value: "25+", label: "Finished Projects" },
    { icon: "👥", value: "15+", label: "Happy Clients" },
    { icon: "⚙️", value: "10+", label: "Skilled Experts" },
    { icon: "🏆", value: "12+", label: "Honorable Awards" },
  ];

  return (
    <section className="bg-blue-600 py-16 relative overflow-hidden font-playfair">
      {/* Background waves */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-30"></div>

      {/* Stats Container */}
      <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 text-center relative z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-3xl p-8 w-56 flex flex-col items-center"
          >
            {/* Abstract Shape Behind Icon */}
            {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black rounded-full opacity-40"></div> */}
            <div className="relative z-20 text-4xl" id="design">{stat.icon}</div>

            {/* Stats Number */}
            <h3 className="text-2xl font-bold text-gray-800 mt-4">{stat.value}</h3>

            {/* Description */}
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
