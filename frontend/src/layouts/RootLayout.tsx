import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <Outlet />
      <footer>fotter</footer>
    </div>
  );
}
