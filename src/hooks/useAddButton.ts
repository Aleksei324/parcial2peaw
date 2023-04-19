import { useState } from "react"
import { useDispatch } from "react-redux"
import { addition } from "../store/slices/todoSlice"

export const useAddButton = () => {

  const [getInputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const createNewTodo = () => {
    dispatch(addition(getInputValue))
  }

  return {
    getInputValue: getInputValue,
    setInputValue: setInputValue,
    createNewTodo: createNewTodo
  }
}