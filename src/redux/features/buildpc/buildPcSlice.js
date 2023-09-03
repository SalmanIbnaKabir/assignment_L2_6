const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
};

const pcBuildSlice = createSlice({
  name: "pcBuild",
  initialState: initialState,
  reducers: {
    addToProduct: (state, action) => {
      const productToAdd = action.payload;

      const isExisting = state.products.find(
        (product) => product.category === productToAdd.category
      );

      if (!isExisting) {
        state.products.push(productToAdd);
      }
    },
  },
});

export const { addToProduct } = pcBuildSlice.actions;
export default pcBuildSlice.reducer;
