import "./style.css";
import NavBar from "./componentes/Header/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hello World!" />
    </div>
  );
};

export default App;
