import { Navbar } from "./nav/Navbar";
import "./header.scss";
import { MovilNavbar } from "./nav/MovilNavbar";

export const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <MovilNavbar />
      </header>
      <div className="oculto"></div>
    </>
  );
};
