import { Key } from "react"
import { Todo } from "./"

export const Lista = () => {

	return (
        <ul>
            {
                state.map( (todo: stateParams, key: Key) => {
                    return (
                        <Todo key={key} id={todo} />
                    )
                })
            }
        </ul>
	)
}
