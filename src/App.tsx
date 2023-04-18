import { Provider } from "react-redux"
import { reduxStore } from './store/store'
import { AddZone, Lista } from './components'

function App() {
  return (
    <div className="App">
      <Provider store={reduxStore}>
        <h1>Parcial 2: Programación en ambiente web</h1>
        <h2>Todo app por Camilo Franco Moya</h2>
        <Lista />
        <AddZone />
      </Provider>
    </div>
  )
}

export default App
