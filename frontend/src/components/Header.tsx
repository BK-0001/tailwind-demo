import Logo from "@/assets/logo.svg";
import { CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
export function Header() {
  return (
    <header className="bg-primary-500">
      <div className="container mx-auto p-6 flex justify-between">
        <div className="flex gap-6 sm:gap-20 items-center">
          <Link className="block w-11 h-auto" to="/">
            <img src={Logo} alt="logo that shows some cup and some text" />
          </Link>
          <nav>
            <ul className="flex items-center gap-4 text-white">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary-500" : ""} `
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary-500" : ""} `
                  }
                  to="/menu"
                >
                  Menu
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <FiShoppingCart className="w-6 h-6" />
          <CiUser className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
}
