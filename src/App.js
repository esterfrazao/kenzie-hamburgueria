import { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'

function App() {

  const [listProducts, setListProducts] = useState([]);
  const [cartList, setCartList] = useState([])

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(res => res.json())
    .then(res => setListProducts(res))
    .catch(error => console.log(error))
  })

  const showProducts = () => {

  }

  const handleClick = (productId) => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products/${productId}`)
    .then(res => res.json())
    .then(res => setCartList([...cartList, res]))
    .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <header>
        <img src={logo} alt='logo' />
        <form>
          <input type="text" placeholder='Digitar produto' />
          <button type='submit'>Pesquisar</button>
        </form>
      </header>
      <section className='interface'>

      <main>
        <ProductsList list={listProducts} callback={handleClick} />
      </main>
      <aside>
        <Cart list={cartList} setter={setCartList} />
      </aside>
      </section>

    </div>
  );
}

export default App;
