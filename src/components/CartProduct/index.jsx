import "./style.css";

function CartProduct({ item: { id, name, category, img }, callback }) {
  return (
    <li>
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <span> {category} </span>
        <button onClick={() => callback(id)}>Remover</button>
      </div>
    </li>
  );
}

export default CartProduct;
