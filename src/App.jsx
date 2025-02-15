import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCar from './components/ShoppingCard/ShoppingCar';
import ProductList from './components/ProductList/ProductList';
import { ToastContainer } from 'react-toastify';
import { useShoppingCar } from './hooks/useShoppingCar';

function App() {
  const { setProducts, products } = useShoppingCar()

  return (
    <div className='main'>
      <ToastContainer />
      <ShoppingCar
        setProducts={setProducts}
        products={products}
      />

      { products?.length > 0 ? 
        <ProductList 
          products={products}
        /> :
        null
      }
    </div>
  )
}

export default App
