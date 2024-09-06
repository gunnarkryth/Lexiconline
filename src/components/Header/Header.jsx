import s from "./Style.module.scss";

import { Navbar } from "../Navbar/Navbar";
export const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.backgroundImage}></div>
      <Navbar></Navbar>
      <div className={s.Logo}>
        <h1>Lexiconline</h1>
      </div>
    </header>
  );
};
