import React, { useReducer, createContext, useEffect } from "react";
import WishlistItems from "./Components/WishlistItems";
import "./assets/css/wishlist.scss";
import ContextWishlist from "./ContextWishlist";
export const WishlistContext = createContext();
const Wishlist = () => {
  useEffect(() => {
    document.title = "Capital Shop | My Wishlist";
  }, []);
  const initialState = {
    WishlistItems: WishlistItems,
    totalItems: 0,
  };
  const clearWishlist = () => {
    return dispatch({
      type: "CLEAR_WISHLIST",
    });
  };
  const removeFromWishlist = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  const reducer = (state, action) => {
    if (action.type === "CLEAR_WISHLIST") {
      return {
        ...state,
        WishlistItems: [],
      };
    }
    if (action.type === "REMOVE_ITEM") {
      return {
        ...state,
        WishlistItems: state.WishlistItems.filter((cele) => {
          return cele.id !== action.payload;
        }),
      };
    }
    return state;
  };
  const [MyWishlistState, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <WishlistContext.Provider
        value={{ ...MyWishlistState, clearWishlist, removeFromWishlist }}
      >
        <ContextWishlist />
      </WishlistContext.Provider>
    </>
  );
};

export default Wishlist;
