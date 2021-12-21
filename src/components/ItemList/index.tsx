import { ILeituraProps } from "./types";
import './styles.scss'

export function ItemList(livro: ILeituraProps) {
  return (
    <li>
      <h3>{livro.author}</h3>
      <p>{livro.title}</p>

      <div className="leitura"><a href={livro.url}>Abrir</a></div>
    </li >
  )
}