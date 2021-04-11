import AboutUs from './pages/AboutUs'
// Global Style
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import MovieDetail from './pages/MovieDetail'
// Router
import { Switch, Route, useLocation } from 'react-router-dom'
// Animation
import { AnimatePresence } from 'framer-motion'
import ScrollTop from './components/ScrollTop'

function App() {
  const location = useLocation()
  return (
    <div className='App'>
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={AboutUs} />
          <Route path='/work' exact component={OurWork} />
          <Route path='/work/:id' component={MovieDetail} />
          <Route path='/contact' component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
