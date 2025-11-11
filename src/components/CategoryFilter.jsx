import React from 'react';
import { Store, Coffee, Utensils, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Semua':
        return Store;
      case 'Makanan':
        return Utensils;
      case 'Minuman':
        return Coffee;
      case 'Jasa':
        return Wrench;
      default:
        return Store;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const Icon = getCategoryIcon(category);
        const isActive = selectedCategory === category;

        return (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md ${
              isActive
                ? 'bg-custom-primary dark:bg-custom-accent text-white dark:text-custom-primary shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{category}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;

