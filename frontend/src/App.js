import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import Home from './screens/Home'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Done from './screens/Done'
import Redirect from './screens/Redirect'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='container'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/done' component={Done} />
          <Route path='/:url' component={Redirect} />
        </Switch>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
