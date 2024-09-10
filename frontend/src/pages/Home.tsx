import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="flex-1">
      <div
        className="
          bg-cover bg-center h-[670px]
          bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
        "
      >
        <div className="container mx-auto px-6 py-20 flex flex-col justify-between h-full">
          <div className="text-white backdrop-blur-2xl p-6 max-w-[400px]">
            <h1 className="font-semibold text-6xl mb-10">
              A unique experience
            </h1>
            <p className="max-w-[229px] text-2xl">
              Artisan copy in a contemporary key.
            </p>
          </div>

          <div>
            <Link
              className="bg-white px-6 py-3 rounded-md font-semibold"
              to="/menu"
            >
              Menu
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
