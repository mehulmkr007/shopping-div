import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((Item) => Item.productId === action.payload.productId);

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartAddItem(state, action) {
      const existingItemIndex = findItemIndex(state, action); 

      if (existingItemIndex !== -1) state[existingItemIndex].quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },

    cartRemoveItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },

    cartItemIncreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },
    cartItemDecreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;

      if (state[existingItemIndex].quantity === 0)
        state.splice(existingItemIndex, 1);
    },
  },
});
 

export const {
  cartAddItem,
  cartRemoveItem,
  cartItemIncreaseQuantity,
  cartItemDecreaseQuantity,
} = slice.actions;

export default slice.reducer;
