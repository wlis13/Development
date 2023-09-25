import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage/mainPage'
import Second from './pages/secondPage/second'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/second" component={Second} />
    </Switch>
  )
}

export default App
