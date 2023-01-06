import { useParams } from "react-router-dom";

function ProductScreen() {
  const params = useParams(); //use react hook
  const { slug } = params; //used in the path attribute for Route component :slug
  return (
    <div>
      <h1> {slug}</h1>
    </div>
  );
}

export default ProductScreen;
