import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Footer />
    </>
  )
}

export default App
