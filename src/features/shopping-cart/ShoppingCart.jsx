import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getItemsFromCart,
  getTotalCost,
  removeItemFromCart,
  resetShoppingCart,
} from "./shoppingCartSlice";
import { printEuro } from "../../utils/currency.utils";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  timeout: 10000,
});

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getItemsFromCart);
  const totalCost = useSelector(getTotalCost);

  console.log("ShoppingCart", { cartItems });

  if (!cartItems) {
    return <></>;
  }

  return (
    <div>
      <div className="flex flex-col p-4 h-screen w-full">
        <div className="mb-auto h-full w-full">
          {Object.entries(cartItems).map(([itemId, item], index) => (
            <div
              className={`text-2xl ${
                index % 2 === 0 && "bg-gray-200"
              } p-2 rounded-md`}
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

        <footer>
          <div className="grid grid-cols-2 text-3xl">
            <div className="col-auto truncate">Total</div>
            <div className="col-auto justify-self-end">
              {printEuro(totalCost)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
              <button
                className="w-full bg-red-400 rounded-md h-20 text-center align-middle active:bg-red-600"
                onClick={() => dispatch(resetShoppingCart())}
              >
                <div className="h-vw font-bold text-2xl text-center align-middle">
                  Limpar
                </div>
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="w-full bg-blue-400 rounded-md h-20 text-center align-middle active:bg-blue-600"
                onClick={() => client.post("/printer/cash-drawer/open").then().catch()}
              >
                <div className="h-vw font-bold text-2xl text-center align-middle">
                  Abrir Gaveta
                </div>
              </button>
            </div>
          </div>
          <button
            className="mt-2 w-full bg-green-400 rounded-md h-20 text-center align-middle active:bg-green-600"
            onClick={() =>
              client
                .post("/printer/print", { data: { items: cartItems } })
                .then(() => dispatch(resetShoppingCart()))
                .catch((err) => console.log({ err }))
            }
          >
            <div className="h-vw font-bold text-3xl text-center align-middle">
              Imprimir
            </div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ShoppingCart;
