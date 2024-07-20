import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/navigation';
import HomePage from './customer/pages/homePage/homePage';
import Footer from './customer/components/footer/footer';
import Product from './customer/components/product/product';
import ProductDetails from './customer/components/productDetails/productDetails';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        <ProductDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
 