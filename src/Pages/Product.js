import { Link } from "react-router-dom";

const product = () => {
  return (
    <section>
      <h1>Here you will see some products</h1>
      <ul>
        <li>
          <Link to="/products/Iphone4"> Iphone 4 </Link>
        </li>
        <li>
          {" "}
          <Link to="/products/Iphone5s"> Iphone 5s </Link>
        </li>
        <li>
          {" "}
          <Link to="/products/IphoneX">Iphone X </Link>
        </li>
        <li>
          {" "}
          <Link to="/products/Iphone12">Iphone 12 </Link>
        </li>
        <li>
          {" "}
          <Link to="/products/Iphone12promax">Iphone 12 pro max </Link>
        </li>
      </ul>
    </section>
  );
};

export default product;
