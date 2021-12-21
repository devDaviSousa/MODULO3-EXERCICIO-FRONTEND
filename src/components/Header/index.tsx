import './styles.scss'
export function Header(prop: { header: string }) {

  return (
    <div id='cabecario'>
      <h1>{prop.header}</h1>
    </div>
  )
}