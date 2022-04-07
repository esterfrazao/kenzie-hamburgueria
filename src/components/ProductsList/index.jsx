import "./style.css";
import Product from "../Product";

function ProductsList({ list, handleClick }) {
  return (
    <section className="products">
      {list.map((item) => (
        <Product key={item.id} item={item} callback={handleClick} />
      ))}
    </section>
  );
}

export default ProductsList;
