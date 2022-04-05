import "./style.css";

function Product({ item: { id, name, category, price, img }, callback }) {
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <span> {category} </span>
        <p> {price} </p>
        <button onClick={() => callback(id)}>Adicionar</button>
      </div>
    </div>
  );
}

export default Product;
