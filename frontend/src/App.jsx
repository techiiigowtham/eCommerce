import { Route, Routes } from "react-router-dom";
import Authlayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminViewLayout from "./components/adminView/adminViewLayout";
import Admindashboard from "./pages/adminView/dashboard";
import Adminproducts from "./pages/adminView/products";
import Adminorders from "./pages/adminView/orders";
import Adminfeatures from "./pages/adminView/features";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route path="/auth" element={<Authlayout />}>
            <Route path="login" element={<AuthLogin />}></Route>
            <Route path="register" element={<AuthRegister />}></Route>
          </Route>
          <Route path="/admin" element={<AdminViewLayout/>}>
            <Route path="dashboard" element={<Admindashboard/>}/>
            <Route path="products" element={<Adminproducts/>}/>
            <Route path="orders" element={<Adminorders/>}/>
            <Route path="features" element={<Adminfeatures/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
