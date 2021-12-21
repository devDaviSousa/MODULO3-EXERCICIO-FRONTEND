import { useCallback, useState } from "react"
import { useDispatch } from "react-redux";
import { pesquisarNaLista } from "../../store/modules/pesquisa/action";

export function Input() {

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }


  const handleAddProductToCart = useCallback(() => {
    const value: string = searchTerm
    console.log(value)
    dispatch(pesquisarNaLista(value))
  }, [dispatch, searchTerm])


  return (
    <div>
      <form>
        <input type="text" onChange={handleChangeValue} />
        <button type="button" onClick={handleAddProductToCart}>Pesquisar</button>
      </form>
    </div>
  )
}

