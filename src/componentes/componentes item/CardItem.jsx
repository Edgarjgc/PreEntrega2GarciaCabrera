import Image from "./Image";
import "../../styles/cardItem.css";
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";
import cartWhite from "../../img/cart-white.svg";

const CardItem = (props) => {
  return (
    <div className="cardItem">
      <Image imagen={props.imagen} />
      <Description
        title={props.title}
        cantidad={props.cantidad}
        precio={props.precio}
      />
      <div className="buttons">
        <Link to={`/item/${props.id}`}>
          <ButtonDetalles txt="Ver detalles" />
        </Link>

        <ButtonAddCart id={props.id} svg={cartWhite} />
      </div>
    </div>
  );
};

export default CardItem;
