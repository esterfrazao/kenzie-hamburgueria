import "./style.css";
import Product from "../Product";

function ProductsList({ list, callback }) {
  return (
    <>
      {list.map((item) => (
        <Product key={item.id} item={item} callback={callback} />
      ))}
    </>
  );
}

export default ProductsList;
