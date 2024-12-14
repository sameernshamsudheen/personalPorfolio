
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    const location = useLocation()
    console.log(location.pathname);
    
  return (
    <div className="selected-none">
      <Navbar />
      <main className="bg-slate-300/20">
        <Outlet />
      </main>
      {location.pathname !=="/" &&<Footer/>}
    </div>
  );
};

export default Layout;
