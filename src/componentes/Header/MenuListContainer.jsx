import { Link } from "react-router-dom";

const MenuListContainer = (props) => {
  return (
    <ul>
      <li>
        <Link to="category/Chemicals">{props.itemOne}</Link>
      </li>
      <li>
        {" "}
        <Link to="category/Accesories">{props.itemTwo}</Link>
      </li>
      <li>
        {" "}
        <Link to="category/Equipment">{props.itemThree}</Link>
      </li>
      <li>
        {" "}
        <Link to="category/Services">{props.itemFour}</Link>
      </li>
    </ul>
  );
};

export default MenuListContainer;
