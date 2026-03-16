import React from "react";

// Componente responsável por exibir um item da lista
const ItemLista = ({ nome, listaMercado, setListaMercado }) => {
  const removerItemLista = () => {
    // Criamos uma cópia da lista
    const novaLista = [...listaMercado];

    // Filtra a lista removendo o item clicado
    const novaListaFiltrada = novaLista.filter(
      (itemAtual) => itemAtual !== nome,
    );

    // Atualiza o estado da lista no componente pai
    setListaMercado(novaListaFiltrada);
  };

  return (
    <li className="flex justify-between gap-2">
      {/* Exibe o nome recebido via props */}
      <p>{nome}</p>

      {/* Botão para remover o item da lista */}
      <button
        className="m-1 rounded bg-red-600 p-1 text-white transition hover:bg-red-400"
        onClick={() => removerItemLista()}
      >
        Remover
      </button>
    </li>
  );
};

export default ItemLista;

// rafce → atalho do VS Code para criar componente
