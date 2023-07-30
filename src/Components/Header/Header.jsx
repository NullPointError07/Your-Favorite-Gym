import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-teal-500 bg-opacity-50">
      <h1 className="ms-12 text-4xl">GymBros</h1>

      <div className="space-x-7 font-medium">
        <NavLink
          to="/Statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Statistics
        </NavLink>
        <NavLink
          to="/AppliedPackages"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Applied Packages
        </NavLink>
        <NavLink
          to="/Blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Blog
        </NavLink>
      </div>

      <button className="me-12">Become A Member</button>
    </nav>
  );
};

export default Header;
