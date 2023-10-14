import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage/mainPage'
import ComandsUnix from './components/ComandsUnix/comandsUnix'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/comands-unix" component={ComandsUnix} />
    </Switch>
  )
}

export default App
