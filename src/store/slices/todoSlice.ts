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
            state.todos[state.todos.findIndex((x) => x.id === action.payload)].completed = !( state.todos[state.todos.findIndex((x) => x.id === action.payload)].completed )
        },
        deletion: (state, action) => {
            state.todos.splice(state.todos.findIndex((x) => x.id === action.payload), 1)
        },
        addition: (state, action) => {
            const x1 = state.todos[0].id
            const x2 = state.todos[state.todos.length-1].id

            if (x1 > x2) {
                state.todos.unshift({
                    userId: 1,
                    id: x1+1,
                    title: action.payload.trim(),
                    completed: false
                })
            }
            else {
                state.todos.unshift({
                    userId: 1,
                    id: x2+1,
                    title: action.payload,
                    completed: false
                })
            }
        },
        waitApi: (state) => {
            state.loading = true
        },
        errorApi: (state) => {
            state.loading = false
            console.log('Fallo en api.')
        },
        completedApi: (state, action) => {
            state.loading = false
            state.todos = [...action.payload]
        }
    }
})

export const { completion, deletion, addition, waitApi, errorApi, completedApi } = todoSlice.actions