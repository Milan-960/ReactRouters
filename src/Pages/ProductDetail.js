import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productName);

  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productName}</p>
    </section>
  );
};

export default ProductDetail;
