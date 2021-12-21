import { ILeituraProps } from "./types";


export function ItemList(livro: ILeituraProps) {
  return (
    <li>
      <h3>{livro.author}</h3>
      <p>{livro.title}</p>
      <a href={livro.url}>Link</a>
    </li >
  )
}