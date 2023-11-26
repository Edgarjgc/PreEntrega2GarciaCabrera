import cart from "../../img/Cart.svg";

const CartWidget = () => {
  return (
    <div className="containerLength">
      <img src={cart} alt="cart"></img>
      <span className="cantCart">15</span>
    </div>
  );
};

export default CartWidget;
