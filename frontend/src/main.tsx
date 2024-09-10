import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Input } from "./components/Input";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container p-4 mx-auto">
      <div className="bg-yui">Yui</div>
      <div className="dark text-misa p-200 ">Misa</div>
      <Input />
      <button
        className="
          bg-red-500 text-white px-4 rounded-lg w-full py-4 font-bold text-xl sm:w-auto md:py-2
          hover:shadow-xl hover:opacity-80 hover:-translate-y-[0.5px]
          active:translate-y-[0.5px]
          disabled:bg-gray-100 disabled:cursor-not-allowed
        "
      >
        Click Me
      </button>
    </div>
  </StrictMode>
);
