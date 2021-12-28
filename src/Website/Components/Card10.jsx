import React, { useContext } from "react";
import { WishlistContext } from "../Wishlist";
const Card10 = ({ cele }) => {
  const { product, id, price } = cele;
  const { removeFromWishlist } = useContext(WishlistContext);
  return (
    <tr className="wishlist-item">
      <td>
        <div className="product">
          <span>{product}</span>
        </div>
      </td>
      <td>
        <div className="price">
          <i className="fas fa-rupee-sign"></i> <span> {price}</span>
        </div>
      </td>
      <td>
        <div className="delete-icon">
          <i
            className="far fa-trash-alt"
            onClick={() => {
              removeFromWishlist(id);
            }}
          ></i>
        </div>
      </td>
    </tr>
  );
};

export default Card10;
