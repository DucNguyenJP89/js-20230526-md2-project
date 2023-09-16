import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import ProductsList from "./Pages/ProductsList/ProductsList";
import ProductsListByType from "./Pages/ProductsListByType/ProductsListByType";
import ProductsListByCategory from "./Pages/ProductsListByCategory/ProductsListByCategory";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CartDetails from "./Pages/CartDetails/CartDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import AdminLogin from "./Pages/Admin/Login/AdminLogin";
import ProtectedPage from "./Pages/Admin/ProtectedPage";
import AdminProductList from "./Components/Admin/AdminProductsList/AdminProductList";
import AdminHome from "./Pages/Admin/AdminHome/AdminHome";
import SideBar from "./Components/Admin/SideBar/SideBar";
import AdminItemDetails from "./Components/Admin/AdminItemDetails/AdminItemDetails";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  const pattern = /^\/admin\//;
  const isAdmin = pattern.test(location.pathname);
  if (isAdmin) {
    return (
      <div className="App">
        <SideBar />
        <Routes>
          <Route element={<ProtectedPage />}>
            <Route path="/admin" element={<AdminHome />}>
              <Route index element={<Dashboard />} />  
              <Route path="products" element={<AdminProductList />} />
              <Route path="products/:id" element={<AdminItemDetails />} />
            </Route>
          </Route>
          <Route path="admin/login" element={<AdminLogin />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="App">
      {location.pathname !== "/check-out" && <Header />}
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
