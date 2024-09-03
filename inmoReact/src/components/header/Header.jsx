import { Navbar } from "./nav/Navbar";
import "./header.scss";

export const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <div className="oculto"></div>
    </>
  );
};
