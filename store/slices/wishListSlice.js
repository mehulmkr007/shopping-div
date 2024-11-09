import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((Item) => Item.productId === action.payload.productId);

// initi
// action.payload ={pid:1, title:"item1", img: ''}
const slice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    wishListAddItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
        
      if (existingItemIndex !== -1) 
        state[existingItemIndex].quantity += 1;
      
      else state.push({ ...action.payload, quantity: 1 });
    },
    wishListRemoveItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
  },
});

export const {
  wishListAddItem, wishListRemoveItem
} = slice.actions;

export default slice.reducer;
