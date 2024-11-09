import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../Assets/cart-icon.png";
import wishList from "../Assets/wishList.png";
import wishListEmpty from "../Assets/wishList empty.png";
import { useDispatch, useSelector } from "react-redux";
import {
  errorOccured,
  fetchProducts,
  updateAllProducts,
} from "../store/slices/productsSlice";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishListItems = useSelector((state) => state.wishList);
  const isLoading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "api/makecall",
      payload: {
        url: "products",
        onStart: fetchProducts.type,
        onSuccess: updateAllProducts.type,
        onError: errorOccured.type,
      },
    });
  }, []);

  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  ) : error ? (
    <h2 style={{ textAlign: "center" }}>{error}</h2>
  ) : (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>

        <div className="cart-wishlist-container">
          <Link to="wishlist">
            {wishListItems.length ? (
              <img src={wishList} className="wishListIcon" alt="wihsListIcon" />
            ) : (
              <img
                src={wishListEmpty}
                className="wishListIcon"
                alt="wihsListIcon"
              />
            )}
          </Link>

          <Link className="cart-icon" to="/cart">
            <img src={CartIcon} className="cartIcon" alt="cartIcon" />
            <div className="cart-items-count">
              {cartItems.reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.quantity,
                0
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
