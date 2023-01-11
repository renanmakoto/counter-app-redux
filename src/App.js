import React from 'react'
import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import {createStore} from 'redux'
import counterReducer from './reducers/counterReducer'
import {Provider} from 'react-redux'

function App() {

  const store = createStore(counterReducer)

  return (
    <div className="App">
        <Provider store={store}>
          <Header></Header>
          <Counter></Counter>
        </Provider>
    </div>
  )
}

export default App;
