import { useState } from 'react'
import './App.css'

function App() {

  const [matrizInicial, setmatrizInicial] = useState([
    [9, 2, 4, 5, 3, 6, 7, 1, 8],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ] 
  );

  

  function verificarValorInput(valorInput, linha, coluna) {
    valorInput = parseInt(valorInput)
    if (matrizInicial[linha].includes(valorInput))
      return 
    for (let i = 0; i < matrizInicial.length; i++) {
      if (matrizInicial[i][coluna] === valorInput) 
        return false;
    }
    const novaMatriz = matrizInicial.map((linhaMatriz, indexLinha) => {
      return linhaMatriz.map((valor, indexColuna) => {
        if (indexLinha === linha && indexColuna === coluna) {
          return parseInt(valorInput) || 0;
        } else {
          return valor;
        }
      });
    });
  
    setmatrizInicial(novaMatriz);
  }
  return (
    <>
    <table>
    {matrizInicial.map((linha, indiceLinha)   => (
      <tr key={Math.random()}>
        {linha.map((coluna, indiceColuna) => (
          <td><input 
            key={Math.random()}
            type="text" 
            value={matrizInicial[indiceLinha][indiceColuna] == 0?"":matrizInicial[indiceLinha][indiceColuna]} 
            onChange={(e) => verificarValorInput(e.target.value, indiceLinha, indiceColuna)}/>
          </td>
        ))}
      </tr>
    ))}
    </table>
    </>
    
  )
}

export default App
