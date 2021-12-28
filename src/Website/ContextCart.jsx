import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Offer from "./Components/Offer";
import Card8 from "./Components/Card8";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const MyCartState = useContext(CartContext);
  const { clearCart, setDeliveryCharges } = useContext(CartContext);

  return (
    <>
      <section className="cart">
        <Offer />
        <section className="caregory-breadcrumb">
          <div className="box">
            <h3>cart ({MyCartState.totalItems})</h3>
            <h6>
              <a href="/Capital_Shop/">home</a> | cart
            </h6>
          </div>
        </section>
        <section className="cart-box">
          {MyCartState.cartItems.length === 0 ? (
            <div className="container empty-cart">
              <a href="/Capital_Shop/" className="btn1">
                continue shopping
              </a>
            </div>
          ) : (
            <div className="container">
              <div className="row">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <td>product</td>
                      <td>price</td>
                      <td>Quantity</td>
                      <td>total</td>
                      <td>remove from cart</td>
                    </tr>
                  </thead>
                  <tbody>
                    {MyCartState.cartItems.map((cele) => {
                      return <Card8 cele={cele} key={cele.id} />;
                    })}

                    <tr className="row-1">
                      <td>
                        <Link to="/Capital_Shop/wishlist" className="btn2">
                          my wishlist
                        </Link>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <button className="btn1" onClick={clearCart}>
                          clear cart
                        </button>
                      </td>
                    </tr>
                    <tr className="row-2">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Total Items</td>
                      <td id="my-cart-cnt-main">{MyCartState.totalItems}</td>
                    </tr>
                    <tr className="row-3">
                      <td>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          placeholder="Enter state"
                        />
                      </td>

                      <td></td>
                      <td></td>
                      <td>Subtotal</td>
                      <td>
                        <i className="fas fa-rupee-sign"></i> &nbsp;{" "}
                        {MyCartState.subTotal}
                      </td>
                    </tr>
                    <tr className="row-4">
                      <td>
                        <input
                          type="text"
                          name="district "
                          id="district "
                          placeholder="Enter district "
                        />
                      </td>
                      <td></td>
                      <td></td>
                      <td>Shipping ({MyCartState.shippingCharge})</td>

                      <td>
                        <div className="select-op">
                          <div className="options">
                            <label htmlFor="fast">fast delivery: </label>
                            &nbsp;
                            <i className="fas fa-rupee-sign"></i>
                            <span>99</span>
                            <input
                              type="radio"
                              className="radio-btn1"
                              name="delivery"
                              id="fast"
                              onClick={() => {
                                setDeliveryCharges(99);
                              }}
                            />
                            <div className="custom-radio1 custom-radio">
                              <i className="fas fa-circle"></i>
                            </div>
                          </div>
                          <div className="options">
                            <label htmlFor="local">local delivery: </label>
                            &nbsp;
                            <i className="fas fa-rupee-sign"></i>
                            <span>49</span>
                            <input
                              type="radio"
                              className="radio-btn2"
                              name="delivery"
                              id="local"
                              onClick={() => {
                                setDeliveryCharges(49);
                              }}
                            />
                            <div className="custom-radio2 custom-radio">
                              <i className="fas fa-circle"></i>
                            </div>
                          </div>
                          <div className="options">
                            <label htmlFor="free">free delivery: </label>
                            &nbsp;
                            <i className="fas fa-rupee-sign"></i>
                            <span>0</span>
                            <input
                              type="radio"
                              className="radio-btn3"
                              name="delivery"
                              id="free"
                              disabled
                              onClick={() => {
                                setDeliveryCharges(0);
                              }}
                            />
                            <div className="custom-radio3 custom-radio">
                              <i className="fas fa-circle"></i>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="row-5">
                      <td>
                        <input
                          type="text"
                          name="address "
                          id="address "
                          placeholder="Enter address "
                        />
                      </td>
                      <td></td>
                      <td></td>
                      <td>Total Amount</td>
                      <td>
                        <i className="fas fa-rupee-sign"></i>
                        <span>{MyCartState.totalAmount}</span>
                      </td>
                    </tr>
                    <tr className="row-6">
                      <td>
                        <Link to="" className="btn2">
                          update details
                        </Link>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <Link to="" className="btn2">
                          procced to checkout
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default ContextCart;
