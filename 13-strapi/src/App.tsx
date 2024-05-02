import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Submenu } from "./Submenu";

export const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
