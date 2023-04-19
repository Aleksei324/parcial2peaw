import { useDispatch, useSelector } from "react-redux"
import { completion, deletion } from "../store/slices/todoSlice"

interface todoProps {
    id: number
}

export const Todo = ({id}: todoProps) => {
    
    const todo = useSelector((state: any) => state.todoSlice.todos[id])
    const dispatch = useDispatch()
	return (
		<li onClick={()=>dispatch(completion(id))}>
            Tarea #{todo.id} <br/>
            {todo.title} <br/>
            Creado por el usuario #{todo.userId} <br/>
            {
                todo.completed ?
                <>Se encuentra completado</>
                :
                <>Falta por completar</>
            }
            <br/>
            <button onClick={()=>dispatch(deletion(id))}>Borrar</button>
        </li>
	)
}
