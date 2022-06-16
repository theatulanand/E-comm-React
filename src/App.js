import "./App.css";
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Product from "./components/Product";
import Notfound from './components/Notfound';
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Product" element={<Product />}></Route>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
