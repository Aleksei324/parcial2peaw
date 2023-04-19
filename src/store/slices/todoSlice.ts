import { createSlice } from "@reduxjs/toolkit";

interface initialStateParams {
    loading: boolean,
    todos: todosArrayParams[]
}

export interface todosArrayParams {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const initialState: initialStateParams = {
    loading: false,
    todos: []
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        completion: (state, action) => {
            state.todos[action.payload].completed = !( state.todos[action.payload].completed )
        },
        deletion: (state, action) => {
            state.todos.splice(action.payload, 1)
        },
        waitApi: (state) => {
            state.loading = true
        },
        errorApi: (state) => {
            state.loading = false
        },
        completedApi: (state, action) => {
            state.loading = false
            state.todos = action.payload
        }
    }
})

export const { completion, deletion, waitApi, errorApi, completedApi } = todoSlice.actions