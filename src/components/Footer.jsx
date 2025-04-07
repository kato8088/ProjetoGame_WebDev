import React from 'react'
import { FooterContainer } from '../styles/FooterStyled'

const Footer = () => {
  return (
    <FooterContainer>
    <div className='contato'>
      <h3>2025 cope rate Se rgio</h3>
      <p>E-mail: contato@email.com</p>
      <p>Telefone: 11 40028922</p>
    </div>

    <div className='direitos'>
      <p>&copy; 2025 - CITY GAMING - Todos os Direitos Reservados.</p>
    </div>

    <div className='redes-sociais'>
      <h3>Redes Sociais</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
    </FooterContainer>
  )
}

export default Footer
