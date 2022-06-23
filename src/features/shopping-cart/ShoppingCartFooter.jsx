import React from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { printEuro } from "../../utils/currency.utils";

import {
  getItemsFromCart,
  getTotalCost,
  resetShoppingCart,
} from "./shoppingCartSlice";

const client = axios.create({
  baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  timeout: 10000,
});

const ShoppingCartFooter = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getItemsFromCart);
  const totalCost = useSelector(getTotalCost);

  return (
    <footer>
      <div className="grid grid-cols-2 text-3xl">
        <div className="col-auto truncate">Total</div>
        <div className="col-auto justify-self-end">{printEuro(totalCost)}</div>
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
            onClick={() =>
              client.post("/printer/cash-drawer/open").then().catch()
            }
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
  );
};

export default ShoppingCartFooter;
