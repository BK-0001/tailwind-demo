import { useEffect, useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  desc: string;
  photo: string;
  price: string;
};

export function Menu() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const getMenu = async () => {
      const response = await fetch("http://localhost:3005/products");

      const data = await response.json();

      setMenu(data);
    };

    getMenu();
  }, []);

  return (
    <ul className="p-10 grid grid-cols-3 gap-4">
      {menu.map(({ id, photo, name }) => (
        <li key={id} className="relative w-20 h-20 rounded overflow-hidden">
          <img className="w-full h-full object-cover" src={photo} alt="" />

          <div>
            <p className="text-sm text-white absolute top-2 left-2">{name}</p>
            <p>another</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
