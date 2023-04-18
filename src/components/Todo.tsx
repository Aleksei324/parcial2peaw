import { useDispatch, useSelector } from "react-redux"

interface todoProps {
    id: number
}

export const Todo = ({id}: todoProps) => {
    
    const reduxState = useSelector((state: any) => state.todoSlice.value)
    const dispatch = useDispatch()
	return (
		<li>
            Tarea #{reduxState[id].id} <br/>
            {reduxState[id].title} <br/>
            Creado por el usuario #{reduxState[id].userId} <br/>
            <button>Borrar</button>
        </li>
	)
}
