import brandlogo from "../../img/brandlogo.svg";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to="/">
      <img src={brandlogo} alt="G&G" title="G&G"></img>
    </Link>
  );
};

export default Brand;
