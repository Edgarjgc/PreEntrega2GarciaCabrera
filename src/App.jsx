import "./style.css";
import NavBar from "./componentes/Header/NavBar";
import ItemListContainer from "./componentes/componentes item/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./componentes/componentes item/ItemDetail";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetail />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
