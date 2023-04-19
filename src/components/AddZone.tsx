import { useAddButton } from "../hooks/useAddButton"

export const AddZone = () => {

	const {getInputValue, setInputValue, createNewTodo} = useAddButton()
	return (
		<>
			<input type="text" value={getInputValue} onChange={(evt) => setInputValue(evt.target.value)} placeholder="Ingresa la tarea que debes realizar..." size={50}></input>
			<button onClick={() => createNewTodo()}>Agregar tarea</button>
    </>
	)
}
