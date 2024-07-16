import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  MdOutlineSpaceDashboard,
  MdOutlineManageAccounts,
  MdOutlineRestaurantMenu,
  MdDashboardCustomize,
} from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import logo from "/logo.png";
import { BiLogOutCircle } from "react-icons/bi";
import { TbReorder } from "react-icons/tb";
import Login from "../components/Login";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const sharedLinks = (
  <>
    <li className="mt-3">
      <Link to="/dashboard">
        <MdOutlineSpaceDashboard /> Dashboard
      </Link>
    </li>

    <li className="mt-3">
      <Link to="/menu">
        <MdOutlineRestaurantMenu /> Menu
      </Link>
    </li>

    <li className="mt-3">
      <Link to="/menu">
        <TbReorder />
        Order Tracking
      </Link>
    </li>
  </>
);

const DashboardLayout = () => {
  const { loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  return (
    <div>
      {isAdmin ? (
        <div>
          <div>
            <div className="drawer lg:drawer-open">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col sm:items-start  sm:justify-start my-2">
                {/* Page content here */}
                <div className="flex flex-col items-center sm:items-center sm:justify-center">
                  <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                  >
                    <MdDashboardCustomize />
                  </label>
                  <button className="btn rounded-full px-6 flex items-center gap-2 bg-green text-white sm:hidden">
                    <BiLogOutCircle /> Logout
                  </button>
                </div>
                <div className="mt-5 md:mt-2 mx-4">
                  <Outlet />
                </div>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <li>
                    <Link to="/dashboard" className="flex justify-start mb-3">
                      {" "}
                      <img src={logo} alt="" className="w-20" />{" "}
                      <div className="badge badge-primary">Admin</div>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/dashboard" className="mt-5">
                      <MdOutlineSpaceDashboard />
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link to="/dashboard/">
                      <MdOutlineManageAccounts /> Manage Booking
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/add-menu">
                      <MdOutlineRestaurantMenu /> Add Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manage-items">
                      <HiTemplate /> Manage Items
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/users">
                      <FaUserAlt /> All users
                    </Link>
                  </li>

                  <hr />

                  {/* {Shgarde Links} */}
                  {sharedLinks}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default DashboardLayout;
