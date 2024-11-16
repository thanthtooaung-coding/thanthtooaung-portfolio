import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
