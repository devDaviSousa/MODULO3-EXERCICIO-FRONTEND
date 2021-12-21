import { Provider } from "react-redux";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";
import store from "./store";

import './styles/global.scss'

function App() {
  return (
    <Provider store={store}>
      <Header header='Curso DFE - Modulo 3 ' ></Header>
      <Input></Input>
      <List></List>
    </Provider>

  );
}

export default App;
