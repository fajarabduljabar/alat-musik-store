import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside class="menu mt-5">
        <ul class="menu-list">
        <li>
            <NavLink to={"/"} style={{textDecoration:"none"}} className="text-dark" >Home</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"} style={{textDecoration:"none"}} className="text-dark" >Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/alat-musik"} style={{textDecoration:"none"}} className="text-dark" >List Alat Musik</NavLink>
          </li>
          <li>
            <NavLink to={"/pesanan"} style={{textDecoration:"none"}} className="text-dark" >Pesanan</NavLink>
          </li>
          <li>
            <NavLink to={"/table-penyewa"} style={{textDecoration:"none"}} className="text-dark" >Penyewa</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
