import "./style.css";

function CartProduct({ item: { id, name, category, img }, callback }) {
  return (
    <li className="cartProduct">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="cartProductInfo">
        <h3>{name}</h3>
        <span> {category} </span>
        <button onClick={() => callback(id)}>Remover</button>
      </div>
    </li>
  );
}

export default CartProduct;
