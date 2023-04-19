import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from './slices/todoSlice'

export const reduxStore = configureStore({
    reducer: {
        todoSlice: todoSlice.reducer
    }
})
