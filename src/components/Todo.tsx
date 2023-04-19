import { useDispatch } from "react-redux"
import { completion, deletion, todosArrayParams } from "../store/slices/todoSlice"
import '../styles/Todo.css'
import { memo } from "react"

interface todoProps {
    obj: todosArrayParams
}

export const Todo = memo(({obj}: todoProps) => {
    
    const dispatch = useDispatch()
	return (
        <>
            <div className={obj.completed?'comp completed':'comp bg'} onClick={() => dispatch(completion(obj.id))}>
                <h2>{obj.title}</h2>
                Creado por el usuario #{obj.userId} <br/>
                {
                    obj.completed ?
                    <>Se encuentra completado</>
                    :
                    <>Falta por completar</>
                }
                <br/>
                Tarea #{obj.id} <br/>
            </div>
            <button onClick={() => dispatch(deletion(obj.id))}>Borrar</button>
        </>
	)
})
