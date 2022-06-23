import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductsByCategory } from "./productsSlice";

import { getSelectedCategory } from "../categories/categoriesSlice";
import { printEuro } from "../../utils/currency.utils";
import { addItemToCart } from "../shopping-cart/shoppingCartSlice";

const Products = () => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector(getSelectedCategory);

  const products = useSelector((state) =>
    getProductsByCategory(state, selectedCategory.id)
  );

  if (!products) {
    return <></>;
  }

  return (
    <div className="p-2">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <button
              className="w-full bg-white rounded border-solid border-2 sm:h-20 lg:h-40 text-center align-middle active:bg-gray-300"
              onClick={() => dispatch(addItemToCart(product))}
            >
              <div className="h-vw font-bold text-4xl text-center align-middle">
                {product.menuTitle || product.title}
              </div>
              <div className="h-vw font-bold text-3xl text-center align-middle">
                {printEuro(product.price)}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
