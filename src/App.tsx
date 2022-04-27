import { Provider } from 'react-redux'
import { PageIndex } from './pages/index'
import { setupStore } from './store'

const store = setupStore()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PageIndex />
      </Provider>
    </div>
  )
}

export default App
