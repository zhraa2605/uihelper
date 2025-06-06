"use client";
import CategoryCard from "./CategoryCard";
import { categories } from "../data/category";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CategoryGrid = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 ">
      <h1 className=" text-2xl md:text-3xl  font-bold text-gray-900 dark:text-white mb-2 text-center leading-snug tracking-wider ">
        {" "}
        Explore{" "}
        <span className="text-color-4 dark:text-purple-300">UI Categories</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center text-md md:text-lg">
        Choose a category to get started
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
        {categories.map((category , index) => (
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay={`${index * 200}`} 
            data-aos-duration="1000"
            key={category.name}
          >
            <CategoryCard
              categoryId={category.id}
              key={category.name}
              name={category.name}
              description={category.description || "No description provided"}
              icon={category.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
