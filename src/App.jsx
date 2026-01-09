import { useRef, useState } from 'react'
import './App.css'
import ItemLista from './itemLista'

function App() {

  // const listaMercado = ["Banana", "Maçã", "Carne"]

  const [listaMercado, setListaMercado] = useState([])

  const inputAdicionar = useRef()

  // Hook
  // useState - Cria uma variável de estado.
  // Ele retorna um array:
  // [variável que armazena o valor, função para atualizar o valor]
  // useRef → Permite acessar diretamente o valor de um input

  const adicionarElementoLista = () => {
    // Criamos uma cópia da lista (não alteramos o estado direto)
    const novaLista = [...listaMercado]
    const valorInput = inputAdicionar.current.value

    // Verifica se o input não está vazio ou só com espaços
    if (valorInput.trim() !== "") {
      // Adiciona um novo item no final da lista
      novaLista.push(valorInput)

      // Limpa o input após adicionar
      inputAdicionar.current.value = ""

      // Atualiza o estado com a nova lista
      setListaMercado(novaLista)
    }

    // ❌ Nunca fazer:
    // listaMercado = novaLista
  }

  return (
    <>
      {/* Fragment → evita criar uma div desnecessária */}
      <h1>Lista de Mercado</h1>

      <input 
        type="text" 
        placeholder="Digite um item..."
        ref={inputAdicionar}
      />

      {/* Botões usam onClick, não onChange */}
      <button onClick={() => adicionarElementoLista()}>
        Adicionar
      </button>

      {
        listaMercado.length > 0 ? (
          <ul>
            {
              // map percorre a lista e renderiza um componente para cada item
              listaMercado.map((item, index) => (
                <ItemLista 
                  key={index} // key ajuda o React a identificar cada item
                  nome={item} // props enviada para o componente ItemLista
                  listaMercado={listaMercado} // necessário para remover itens
                  setListaMercado={setListaMercado} // necessário para remover itens
                />
              ))
            }
          </ul>
        ) : (
          <p>Você não tem nenhum item na lista</p>
        )
      }
    </>
  )
}

export default App
