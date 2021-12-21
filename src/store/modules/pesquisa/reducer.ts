import { Reducer } from "redux"


const pesquisa: Reducer<string> = (state = '', action): string => {

  switch (action.type) {
    case 'PESQUISAR_LEITURA_NA_LISTA': {
      const { pesquisa } = action.payload
      return pesquisa;
    }
    default:
      return state
  }

}

export default pesquisa