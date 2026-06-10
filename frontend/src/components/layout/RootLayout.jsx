import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas font-sans">
      <div className="fixed top-0 left-0 w-full z-50 pt-4 md:pt-6 transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <Navbar />
        </div>
      </div>
      <div className="flex-1 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
