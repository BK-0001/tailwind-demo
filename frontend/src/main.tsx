import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AvatarDemo } from "./components/Avatar";
import { Input } from "./components/Input";
import { Button } from "./components/ui/button";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container p-4 mx-auto">
      <div className="bg-yui">Yui</div>
      <div className="dark text-misa p-200 ">Misa</div>
      <Input />
      <Button variant={"destructive"} size={"lg"}>
        Click Me
      </Button>
      <AvatarDemo />
    </div>
  </StrictMode>
);
