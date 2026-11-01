import MainLayout from "../components/common/MainLayout";
import Home from "../pages/client/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/client/Cart";
import Menu from "../pages/client/Menu";
import Checkout from "../pages/client/Checkout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import OrderSuccess from "../pages/client/OrderSuccess";
import Orders from "../pages/client/Orders";
import About from "../pages/client/About";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="menu" element={<Menu />} />
        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="order-success" element={<OrderSuccess />} />
        <Route path="orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
