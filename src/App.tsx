import { Provider } from "react-redux";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";
import store from "./store";

import "./styles/global.scss";

function App() {
  return (
    <Provider store={store}>
      <Header header="MÓDULO 3: EXERCÍCIO" />
      <Input />
      <List />
    </Provider>
  );
}

export default App;
