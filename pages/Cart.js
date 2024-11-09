import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  let cartItems = useSelector((state) => state.cartItems);
  const isLoading = useSelector((state) => state.products.loading);

  return cartItems.length ? !isLoading && (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>

      <div className="cart-items-container">
        {/* Cart-container */}
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>

        {/*Middle Individual Items */}
        {cartItems.map(
          ({ productId, title, rating, price, imageUrl, quantity }) => (
            <CartItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={imageUrl}
              rating={rating}
            />
          )
        )}

        {/* Bottom End Total */}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div>Total:</div>
          <div className="total">
            $
            {cartItems
              .reduce(
                (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
                0
              )
              .toFixed(2)}
          </div>
        </div>
      </div>
      {/*End of cart item containers div*/}
      {/* End of main div */}
    </div>
  ) : !isLoading &&(
    <div className="emptyCart">
      <h2>Cart is Empty</h2>
    </div>
  );
}
