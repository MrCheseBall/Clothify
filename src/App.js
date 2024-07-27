import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/navigation';
import HomePage from './customer/pages/homePage/homePage';
import Footer from './customer/components/footer/footer';
import Product from './customer/components/product/product';
import ProductDetails from './customer/components/productDetails/productDetails';
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkout/Checkout';
import Order from './customer/components/order/Order';
import OrderDetails from './customer/components/order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './routers/CustomerRouters';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        
      </Routes>
      
      
    </div>
  );
}

export default App;
 