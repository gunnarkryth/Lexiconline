import { Link } from "react-router-dom";
import s from "./Style.module.scss";

export const Navbar = () => {
  return (
    <nav className={s.Navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/api">API</Link>
        </li>
      </ul>
    </nav>
  );
};
