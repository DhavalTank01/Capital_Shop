import React, { useReducer, createContext, useEffect } from "react";
import "./assets/css/Cart.scss";
import MyCart from "./Components/MyCart";
import ContextCart from "./ContextCart";

export const CartContext = createContext();

const Cart = () => {
  const initialState = {
    cartItems: MyCart,
    subTotal: 0,
    totalAmount: 0,
    shippingCharge: 99,
    totalItems: 0,
  };

  const removeFromCart = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };
  const incrementQty = (id) => {
    return dispatch({
      type: "INCREMENTQTY",
      payload: id,
    });
  };
  const decrementQty = (id) => {
    return dispatch({
      type: "DECREMENTQTY",
      payload: id,
    });
  };
  const setDeliveryCharges = (amt) => {
    return dispatch({
      type: "SETDELIVERYCHARGES",
      payload: amt,
    });
  };
  const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
      return {
        ...state,
        cartItems: state.cartItems.filter((cele) => {
          return cele.id !== action.payload;
        }),
      };
    }
    if (action.type === "CLEAR_CART") {
      return {
        ...state,
        cartItems: [],
      };
    }
    if (action.type === "INCREMENTQTY") {
      let updateCart = state.cartItems.map((cele) => {
        if (cele.id === action.payload) {
          return { ...cele, qty: cele.qty + 1 };
        }
        return cele;
      });
      return { ...state, cartItems: updateCart };
    }
    if (action.type === "DECREMENTQTY") {
      let updateCart = state.cartItems
        .map((cele) => {
          if (cele.id === action.payload) {
            return { ...cele, qty: cele.qty - 1 };
          }
          return cele;
        })
        .filter((cele) => {
          return cele.qty !== 0;
        });
      return { ...state, cartItems: updateCart };
    }
    if (action.type === "SETDELIVERYCHARGES") {
      let chagers = action.payload;
      let { subTotal } = state;
      let amt = chagers + subTotal;
      return { ...state, shippingCharge: chagers, totalAmount: amt };
    }
    if (action.type === "GET_TOTAL") {
      let { totalItems } = state.cartItems.reduce(
        (accum, cele) => {
          let { qty } = cele;
          accum.totalItems += qty;
          return accum;
        },
        {
          totalItems: 0,
        }
      );
      let { subTotal } = state.cartItems.reduce(
        (accum, cele) => {
          let { qty, price } = cele;
          accum.subTotal = accum.subTotal + qty * price;
          return accum;
        },
        {
          subTotal: 0,
        }
      );
      let { shippingCharge } = state;
      let amt = shippingCharge + subTotal;
      return { ...state, totalItems, subTotal, totalAmount: amt };
    }
    return state;
  };
  const [MyCartState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = "Capital Shop | My Cart";
    dispatch({ type: "GET_TOTAL" });
  }, [MyCartState.cartItems, MyCartState.shippingCharge]);

  return (
    <>
      <CartContext.Provider
        value={{
          ...MyCartState,
          removeFromCart,
          clearCart,
          decrementQty,
          incrementQty,
          setDeliveryCharges,
        }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
