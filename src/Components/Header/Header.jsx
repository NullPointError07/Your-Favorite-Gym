import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-teal-500 bg-opacity-50 ">
      <div className="flex justify-between items-center ">
        <Link to="/">
          <h1 className="ms-12 text-4xl mt-4">GymBros</h1>
        </Link>

        <div className="space-x-7 font-medium mt-4">
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

        <button className="me-12 mt-4">Become A Member</button>
      </div>
    </nav>
  );
};

export default Header;
