import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: ''
  },
  reducers: {

    errorOccured(state,action){
      state.loading= false;
      state.error = action.payload || 'Something Went Wrong!'
    },
    fetchProducts(state) {
      state.loading = true;
    },
    updateAllProducts(state, action) {
      state.loading = false;
      state.list = action.payload;
    },
  },
}); 
export const { updateAllProducts, fetchProducts, errorOccured } = slice.actions;

export default slice.reducer;
