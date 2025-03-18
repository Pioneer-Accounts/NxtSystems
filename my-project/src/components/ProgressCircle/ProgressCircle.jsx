import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CircularProgress = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < percentage ? prev + 1 : percentage));
    }, 20);

    return () => clearInterval(interval);
  }, [percentage]);

  const radius = 40; // Increased radius for better scaling
  const strokeWidth = 8; // Thicker stroke for better visibility
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-24 h-24"> {/* Increased size */}
      <svg width="100" height="100" viewBox="0 0 100 100"> {/* Scaled viewBox */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#0058C6"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </svg>
      {/* Bigger Percentage Text */}
      <span className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-gray-800">
        {progress}%
      </span>
    </div>
  );
};

const ProgressSection = () => {
  return (
    <div className="flex justify-center gap-5 bg-gray-100 p-4 text-2xl">
      <div className="text-center">
        <div className="flex justify-center">
          <CircularProgress percentage={94} />
        </div>
        <h3 className="mt-2 font-bold text-gray-800">Business Grow</h3>
        <p className="text-sm text-gray-500">
          Efficiently transition top-line ideas before market.
        </p>
      </div>
      <div className="text-center">
        <div className="flex justify-center">
          <CircularProgress percentage={96} />
        </div>
        <h3 className="mt-2 font-bold text-gray-800">Quality Products</h3>
        <p className="text-sm text-gray-500">
          Efficiently transition top-line ideas before market.
        </p>
      </div>
    </div>
  );
};

export default ProgressSection;
