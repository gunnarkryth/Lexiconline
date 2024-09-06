import { Link } from "react-router-dom";
import s from "./Style.module.scss";

export const Navbar = () => {
  return (
    <nav className={s.Navbar}>
      <div className={s.circle}>
        <div className="imgContainer">
          <img src="src/assets/images/book.png" alt="" />
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/api">API</Link>
        </li>
      </ul>
    </nav>
  );
};
