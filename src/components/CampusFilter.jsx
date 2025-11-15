import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const CampusFilter = ({ campuses, selectedCampus, setSelectedCampus }) => {
  const getCampusShortName = (campus) => {
    if (campus === "Semua") return "Semua";
    if (campus === "Universitas Islam Negeri Malang") return "UIN Malang";
    if (campus === "Universitas Brawijaya") return "UB";
    if (campus === "Universitas Malang") return "UM";
    return campus;
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {campuses.map((campus) => {
        const isActive = selectedCampus === campus;
        const shortName = getCampusShortName(campus);

        return (
          <motion.button
            key={campus}
            onClick={() => setSelectedCampus(campus)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md ${
              isActive
                ? "bg-custom-primary dark:bg-custom-accent text-white dark:text-custom-primary shadow-lg scale-105"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            <span>{shortName}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default CampusFilter;
