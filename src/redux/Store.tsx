import { configureStore } from "@reduxjs/toolkit";
import artistListSlice  from "@/redux/ArtistList";

const store = configureStore({
  reducer: {
    list: artistListSlice.reducer,
  },
});

export default store;
export type State = ReturnType<typeof store.getState>;