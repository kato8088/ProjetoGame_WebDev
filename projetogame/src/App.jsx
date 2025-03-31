import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './routes/Error'
import Home from './routes/Home'
import Login from './routes/Login'
import Filtro from './routes/Filtro'
import Jogador from './routes/Jogador'

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="*" element={<Error/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/filtro" element={<Filtro/>}/>
      <Route path="/jogador" element={<Jogador/>}/>
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App