import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import ProductsList from './Pages/ProductsList/ProductsList';
import ProductsListByType from './Pages/ProductsListByType/ProductsListByType';
import ProductsListByCategory from './Pages/ProductsListByCategory/ProductsListByCategory';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import CartDetails from './Pages/CartDetails/CartDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/item/:id" element={<ProductDetails />} /> 
        <Route path="/catalog/:type" element={<ProductsList />}>
          <Route index element={<ProductsListByType />} />
          <Route path=":category" element={<ProductsListByCategory />} />
        </Route>
        <Route path="/cart" element={<CartDetails />} />
        <Route element={<PrivateRoute />}>
          <Route path="/check-out" element={<CheckOut />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
