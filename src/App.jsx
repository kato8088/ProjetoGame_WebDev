import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './routes/Error'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import Login from './routes/Login'
import Filtro from './routes/Filtro'
import Jogador from './routes/Jogador'
import Dados from './Data/Dados.json'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f4f4f4;
}

#container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#content-wrap {
  display: grid;
  grid-template-column: 1fr 200px;
  gap: 20px;
  padding: 20px;
  flex: 1;
}

@media (max-width: 768px) {
  #content-wrap{
    grid-template-column: 1fr;
  }
  aside{
    display: block;
    width: 100%;
  }
}
`

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home Dados={Dados}/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/filtro" element={<Filtro/>}/>
        <Route path="/jogador" element={<Jogador/>}/>      
      </Routes>
      <Aside/>
      <Footer/>
    </Router>
  )
}

export default App