import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../services/api";
import { IPesquisa } from "../../store/modules/pesquisa/types";
import { ItemList } from "../ItemList";
import { ILeitura } from "./types";

import './styles.scss'

export function List() {

  const [leituras, setLeituras] = useState<ILeitura[]>([])

  const pesquisa = useSelector<IPesquisa, string>(state => state.pesquisa);


  useEffect(() => {
    api.get(`${pesquisa}`)
      .then(response => {
        const data = response.data.hits
        setLeituras(data)
      })
  }, [pesquisa])

  return (
    <ul>
      {

        leituras.map((leitura: ILeitura) => {
          return (
            <ItemList author={leitura.author} title={leitura.title} url={leitura.url}></ItemList>
          )
        })
      }
    </ul>
  )
}








