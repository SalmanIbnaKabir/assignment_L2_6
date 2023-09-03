import { configureStore } from "@reduxjs/toolkit";
import pcBuildReducer from "./features/buildpc/buildPcSlice";

export default configureStore({
  reducer: {
    pcBuild: pcBuildReducer,
  },
});
