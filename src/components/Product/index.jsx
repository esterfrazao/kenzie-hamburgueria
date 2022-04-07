import "./style.css";

function Product({ item: { id, name, category, price, img }, callback }) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const addProduct = () => {
    callback(id);
    price = -price;
  };

  return (
    <div className="product">
      <figure className="productImage">
        <img src={img} alt={name} />
      </figure>
      <div className="productInfo">
        <h3>{name}</h3>
        <span> {category} </span>
        <p> {formatter.format(price)} </p>
        <button onClick={addProduct}>Adicionar</button>
      </div>
    </div>
  );
}

export default Product;
