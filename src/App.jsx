import './App.css'
import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage/mainPage'

function App() {

  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  )
}

export default App
