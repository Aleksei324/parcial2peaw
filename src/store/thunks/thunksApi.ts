import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import { completedApi, errorApi, waitApi } from "../slices/todoSlice"

export const thunksApi = (dispatch: Dispatch<AnyAction>) => {
    const api = async () => {

        dispatch(waitApi())

        const url = `https://jsonplaceholder.typicode.com/todos`
        const resp = await fetch(url)
        const data = await resp.json()

        if (data !== undefined) {
            dispatch(completedApi(data))
        }
        else {
            dispatch(errorApi())
        }
    }
    return api()
}
