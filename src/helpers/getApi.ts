import { initialStateParams } from "../store/todoSlice"

export const getApi = async () => {
	const url = `https://jsonplaceholder.typicode.com/todos`
	const resp = await fetch(url)
	const [data] = await resp.json()
	const result = data.map( (todo: initialStateParams) => {
		return {
			userId: todo.userId,
			id: todo.id,
			title: todo.title,
			completed: todo.completed
		}
	})
	return result
}
