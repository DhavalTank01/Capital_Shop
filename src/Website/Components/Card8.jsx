import React, { useContext } from "react";
import { CartContext } from "../Cart";

const Card8 = ({ cele }) => {
  const { id, product, price, qty } = cele;
  const { removeFromCart, incrementQty, decrementQty } =
    useContext(CartContext);
  return (
    <>
      <tr>
        <td>
          <span className="p-name"> {product}</span>
        </td>
        <td>
          <i className="fas fa-rupee-sign"></i>
          &nbsp; {price}
        </td>
        <td>
          <div className="qty">
            <div className="box">
              <div className="number">
                <input type="text" readOnly value={qty} />
              </div>
              <div className="btns">
                <button className="add">
                  <i
                    className="fas fa-plus"
                    onClick={() => {
                      incrementQty(id);
                    }}
                  ></i>
                </button>
                <button className="sub">
                  <i
                    className="fas fa-minus"
                    onClick={() => {
                      decrementQty(id);
                    }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </td>
        <td>
          <i className="fas fa-rupee-sign"></i>
          &nbsp; {qty * price}
        </td>
        <td className="icon-btns">
          <i
            className="far fa-trash-alt"
            onClick={() => {
              removeFromCart(id);
            }}
          ></i>
          {/* <i className="far fa-heart"></i> */}
        </td>
      </tr>
    </>
  );
};

export default Card8;
