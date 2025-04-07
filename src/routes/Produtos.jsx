import React from 'react'
import { ProdutoContainer } from '../styles/ProdutosStyled'

const Produtos = ({imagem, titulo, descricao, preco}) => {
  return (
    <ProdutoContainer>
    <article className='produto'>
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p className='preco'>{preco}</p>
      <button>Comprar</button>
    </article>
    </ProdutoContainer>
  )
}

export default Produtos
