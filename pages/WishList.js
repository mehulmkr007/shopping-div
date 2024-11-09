import React from "react";
import { useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";

export default function WishList() {
  const wishListItems = useSelector((state) => state.wishList); 
  
  return (
    <div className="wishlist-items-container">
      <h2 style={{ textAlign: "center" }}>Items in Your Wishlist</h2>

      <div className="wishlist-header wishlist-item-container">
        <div className="wishlist-item-tag">Item</div>
        <div className="wishlist-price">Price</div>
        <div className="wishlist-rating">Rating</div>
        <div className="wishlist-rating">Remove</div>
      </div>
      {wishListItems
        ? 
        wishListItems.map(({ productId, title, rating, price, imageUrl }) => (
            <WishListItem
              key={productId}
              productId={productId}
              title={title}
              rating={rating}
              price={price}
              imageUrl={imageUrl}
            />
          ))
        : ""}
    </div>
  );
}
