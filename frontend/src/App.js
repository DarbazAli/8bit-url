import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import Home from './screens/Home'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Done from './screens/Done'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/done' component={Done} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
