import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { AddZone, Lista } from './components'
import { thunksApi } from './store/thunks/thunksApi'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    thunksApi(dispatch)
  },[])

  return (
    <div className="App">
      <h1>Parcial 2: Programación en ambiente web</h1>
      <h2>Todo app por Camilo Franco Moya</h2>
      <Lista />
      <AddZone />
    </div>
  )
}

export default App
