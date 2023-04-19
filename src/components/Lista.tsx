import { Key } from "react"
import { useSelector } from "react-redux"
import { todosArrayParams } from "../store/slices/todoSlice"
import { Todo } from "./"

export const Lista = () => {

    const loading = useSelector((state: any) => state.todoSlice.loading)
    const array = useSelector((state: any) => state.todoSlice.todos)
	return (
        <>
            {
                loading ?
                <h1>Cargando...</h1>
                :
                <ul>
                    {
                        array.map( (todo: todosArrayParams, key: Key) => {
                            return (
                                <Todo key={key} id={todo.id} />
                            )
                        })
                    }
                </ul>
            }
        </>
	)
}
