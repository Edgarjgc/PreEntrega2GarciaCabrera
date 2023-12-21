import Image from "./Image";
import Description from "./Description";
import "../../styles/ItemDetail.css";
import ButtonDetalles from "./ButtonDetalles";
import AddCantCart from "./AddCantCart";
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/asyncmock";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetail = () => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    setDatos([]);

    fetchSimulation(
      productos.filter((flt) => flt.id == idItem),
      2000
    )
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="itemDetail">
      {datos.map((items) => (
        <>
          <div className="containerLeft">
            <Image imagen={items.imageProduct.firtsImage} />
          </div>

          <div className="containerRigth">
            <Description
              title={items.title}
              parrafo={items.description}
              cantidad={items.stock}
              precio={items.price}
            />

            <div className="buttons">
              <AddCantCart cant={5} />
              <ButtonDetalles txt="Agregar al carrito" />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ItemDetail;
