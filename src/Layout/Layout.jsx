
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="selected-none">
      <Navbar />
      <main className="bg-slate-300/20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
