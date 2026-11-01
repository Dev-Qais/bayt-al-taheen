import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default MainLayout;
