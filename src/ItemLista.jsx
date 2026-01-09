import React from 'react'

// Componente responsável por exibir um item da lista
const ItemLista = ({ nome, listaMercado, setListaMercado }) => {

  const removerItemLista = () => {
    // Criamos uma cópia da lista
    const novaLista = [...listaMercado]

    // Filtra a lista removendo o item clicado
    const novaListaFiltrada = novaLista.filter(
      (itemAtual) => itemAtual !== nome
    )

    // Atualiza o estado da lista no componente pai
    setListaMercado(novaListaFiltrada)
  }

  return (
    <li>
      {/* Exibe o nome recebido via props */}
      <p>{nome}</p>

      {/* Botão para remover o item da lista */}
      <button onClick={() => removerItemLista()}>
        Remover
      </button>
    </li>
  )
}

export default ItemLista

// rafce → atalho do VS Code para criar componente
