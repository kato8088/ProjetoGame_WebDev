import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, Nav } from '../styles/HeaderStyled'

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link>Acessórios</Link></li>
        <li><Link>Promoções</Link></li>
        <li><Link to="/login">Login</Link></li>
     </ul>
    </nav>
    </Nav>
    </HeaderContainer>
  )
}

export default Header
