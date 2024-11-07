import './App.css'
import Footer from './Components/Footer'
import { Header } from './Components/Header'
import { Brands } from './Pages/Brands'
import { Design } from './Pages/Design'
import { Form } from './Pages/Form'
import { Hero } from './Pages/Hero'
import { Review } from './Pages/Review'
import { Solutions } from './Pages/Solutions'
import { Twins } from './Pages/Twins'

function App() {

  return (
    <>
     <Header/>
     <Hero/>
     <Brands/>
     <Solutions/>
     <Design/>
     <Twins/>
     <Review/>
     <Form/>
     <Footer/>
    </>
  )
}

export default App
