import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from './todoSlice'

export const reduxStore = configureStore({
    reducer: {
        todoSlice: todoSlice.reducer
    }
})
