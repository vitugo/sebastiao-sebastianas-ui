import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCategories,
  getSelectedCategory,
  selectCategory,
} from "./categoriesSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div className="px-2">
      {categories.map((category) => (
        <div key={category.id} className="py-2">
          <button
            className={`w-full ${category.id === selectedCategory.id && "bg-gray-300" } rounded border-solid border-2 h-28 text-center align-middle`}
            onClick={() => dispatch(selectCategory(category))}
          >
            <div className="h-vw font-bold text-4xl text-center align-middle">
              {category.title}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
