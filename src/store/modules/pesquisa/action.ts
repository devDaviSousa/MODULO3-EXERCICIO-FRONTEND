

export function pesquisarNaLista(pesquisa: string) {

  return {
    type: 'PESQUISAR_LEITURA_NA_LISTA',
    payload: {
      pesquisa,
    }
  }
} 