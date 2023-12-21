import CardItem from "./CardItem";
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/asyncmock";
import { useState, useEffect } from "react";
import "../../styles/ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory === undefined) {
      fetchSimulation(productos, 0)
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    } else {
      fetchSimulation(
        productos.filter((filter) => filter.type === idCategory),
        0
      )
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    }
  }, [idCategory]);

  return (
    <div className="itemListContainer">
      {datos.map((product) => (
        <CardItem
          key={product.id}
          id={product.id}
          imagen={product.imageProduct.firtsImage}
          title={product.title}
          cantidad={product.stock}
          precio={product.price}
        />
      ))}
      ;
    </div>
  );
};

export default ItemListContainer;
