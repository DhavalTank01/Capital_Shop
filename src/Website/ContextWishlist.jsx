import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Offer from "./Components/Offer";
import Card10 from "./Components/Card10";
import { WishlistContext } from "./Wishlist";
const ContextWishlist = () => {
  const MyWishlistState = useContext(WishlistContext);
  const { clearWishlist } = useContext(WishlistContext);
  return (
    <>
      <section className="cart">
        <Offer />
        <section className="caregory-breadcrumb">
          <div className="box">
            <h3>wishlist ({MyWishlistState.WishlistItems.length})</h3>
            <h6>
              <a href="/Capital_Shop/">home</a> | wishlist
            </h6>
          </div>
        </section>
        <section className="cart-box">
          {MyWishlistState.WishlistItems.length === 0 ? (
            <div className="container empty-cart">
              <a href="/Capital_Shop/" className="btn1">
                continue shopping
              </a>
            </div>
          ) : (
            <div className="container">
              <table className="wishlist-table">
                <thead>
                  <tr>
                    <th className="product">Products</th>
                    <th className="price">Price</th>
                    <th className="delete-icon">Remove from wishlist</th>
                  </tr>
                </thead>
                <tbody>
                  {MyWishlistState.WishlistItems.map((cele) => {
                    return <Card10 cele={cele} key={cele.id} />;
                  })}
                  <tr>
                    <td>
                      <Link className="btn1" to="/Capital_Shop/cart">
                        my cart
                      </Link>
                    </td>
                    <td></td>
                    <td>
                      <Link
                        className="btn1"
                        to=""
                        onClick={() => clearWishlist()}
                      >
                        clear wishlist
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default ContextWishlist;
