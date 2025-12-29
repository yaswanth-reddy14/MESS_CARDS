import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import VendorMesses from "./pages/vendor/VendorMesses";
import VendorProfile from "./pages/vendor/VendorProfile";
import VendorMenus from "./pages/vendor/VendorMenus";
import AddMess from "./pages/vendor/AddMess";
import AddMenu from "./pages/vendor/AddMenu";
import EditMenu from "./pages/vendor/EditMenu";
import EditMess from "./pages/vendor/EditMess";




export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Vendor */}
      <Route path="/vendor" element={<VendorMesses />} />
      <Route path="/vendor/profile" element={<VendorProfile />} />
      <Route path="/vendor/add-mess" element={<AddMess />} />
      <Route path="/vendor/:messId/menus" element={<VendorMenus />} />
      <Route path="/vendor/:messId/add-menu" element={<AddMenu />} />
      <Route path="/vendor/:messId/menu/:menuId/edit" element={<EditMenu />} />
      <Route path="/vendor/:messId/edit" element={<EditMess />} />

  
      
    </Routes>
  );
}
