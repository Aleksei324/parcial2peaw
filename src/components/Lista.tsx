import { Key } from "react"
import { useSelector } from "react-redux"
import { todosArrayParams } from "../store/slices/todoSlice"
import { Todo } from "./"

export const Lista = () => {

    const state = useSelector((state: any) => state.todoSlice)
	return (
        <>
            {
                state.loading ?
                <h1>Cargando...</h1>
                :
                <>
                    {
                        state.todos.map( (todoObject: todosArrayParams, key: Key) => {
                            return (
                                <Todo key={key} obj={{...todoObject}} />
                            )
                        })
                    }
                </>
            }
        </>
	)
}
