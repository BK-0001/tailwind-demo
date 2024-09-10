import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="bg-primary-400">
      <div className="container p-6 py-10 mx-auto text-primary-500">
        <h1 className="font-semibold text-xl mb-4">CAFE 86 TM</h1>

        <nav>
          <ul className="grid grid-cols-2 gap-4 max-w-[200px]">
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
