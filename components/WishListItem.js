import React from "react";
import removeimg from "../Assets/remove.png";
import { useDispatch } from "react-redux";
import { wishListRemoveItem } from "../store/slices/wishListSlice";

export default function WishListItem({ 
  productId, 
  title, 
  rating, 
  price, 
  imageUrl 
}) { 
    const dispatch = useDispatch();

    return (
    <div className="wishlist-item-container">
      <div className="wishlist-item">
        
        <div className="wishlist-item-title-img">
          <img src={imageUrl} className="wishlist-img" alt={title} />
          <div className="title">{title}</div>
        </div>

        <div className="wishlist-price">${price}</div>

        <div className="wishlist-rating">
          <p>{rating}</p> 
          <p className="rating-inner-style">★ ★ ★ ★</p>
        </div>

        <div className="wishlist-remove-div">
          <img src={removeimg} className="wishlist-remove-img" alt="remove" 
          onClick={()=> { dispatch(wishListRemoveItem(productId))}}
          />
        </div>

      </div>
    </div>
  );
}
