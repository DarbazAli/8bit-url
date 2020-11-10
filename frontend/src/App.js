import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import Home from './screens/Home'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Done from './screens/Done'
import Urls from './screens/Urls'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='container'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/done' component={Done} />
          <Route path='/urls' component={Urls} />
        </Switch>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
