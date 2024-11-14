import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
