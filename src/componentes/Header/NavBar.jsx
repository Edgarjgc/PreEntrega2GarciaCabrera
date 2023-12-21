import Brand from "./Brand";
import MenuListContainer from "./MenuListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>
      <nav className="containerMenuList">
        <MenuListContainer
          itemOne="Chemicals"
          itemTwo="Accesories"
          itemThree="Equipment"
          itemFour="Services"
        />
      </nav>

      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
