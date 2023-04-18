import { createSlice } from "@reduxjs/toolkit";

export interface initialStateParams {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const initialState: initialStateParams[] = []

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        completion: (state, action) => {
            state[action.payload].completed = !( state[action.payload].completed )
        },
        waitApi: (state, action) => {
            state[action.payload].completed = !( state[action.payload].completed )
        },
        errorApi: (state, action) => {
            state[action.payload].completed = !( state[action.payload].completed )
        },
        completedApi: (state, action) => {
            state[action.payload].completed = !( state[action.payload].completed )
        }
    }
})

export const { completion } = todoSlice.actions