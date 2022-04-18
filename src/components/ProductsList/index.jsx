import "./style.css";

import Product from "../Product";

const ProductsList = ({ list, handleClick }) => {
  return (
    <section className="products">
      {list.map((item) => (
        <Product key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default ProductsList;
