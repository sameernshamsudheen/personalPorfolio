import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main  className="bg-slate-300/20 h-[100vh] select-none" >
  
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
