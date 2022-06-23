import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsFromCart, removeItemFromCart } from "./shoppingCartSlice";
import { printEuro } from "../../utils/currency.utils";

import ShoppingCartHeader from "./ShoppingCartHeader";
import ShoppingCartFooter from "./ShoppingCartFooter";
import dragToScroll from "../../utils/dragToScroll.utils";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getItemsFromCart);

  useEffect(() => {
    dragToScroll({ elementId: "shopping-cart-list" });
  }, []);

  if (!cartItems) {
    return <></>;
  }

  return (
    <div>
      <div className="flex flex-col p-4 h-screen w-full">
        <ShoppingCartHeader />

        <div
          id="shopping-cart-list"
          className="mb-auto h-full w-full overflow-auto cursor-grab"
        >
          {Object.entries(cartItems).map(([itemId, item], index) => (
            <div
              className={`text-2xl ${
                index % 2 === 0 && "bg-gray-200"
              } p-2 rounded-md`}
              key={itemId}
            >
              <div className="grid grid-cols-2" key={itemId}>
                <div className="col-auto truncate">
                  {item.quantity} - {item.title}
                </div>
                <div className="col-auto justify-self-end">
                  {printEuro(item.quantity * item.price)}
                  <button
                    className="bg-gray-500 rounded-md w-7 b-1 ml-2 text-white"
                    onClick={() => dispatch(removeItemFromCart(item))}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ShoppingCartFooter />
      </div>
    </div>
  );
};

export default ShoppingCart;
