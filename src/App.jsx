import { Toaster } from 'react-hot-toast'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Skills from './sections/Skills'
import Work from './sections/Work'
import Footer from './sections/footer'
import './index.css'

function App() {

  return (
   <>
    <Toaster position="text-center" reverseOrder={false} />
    <Navbar />
    <Hero />
    <About/>
    <Skills />
    <Work />
    <Experience />
    <Contact />
    <Footer />
   </>
  )
}

export default App
