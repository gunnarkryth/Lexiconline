import s from "./Style.module.scss";

import { Navbar } from "../Navbar/Navbar";
export const Header = () => {
  return (
    <header className={s.Header}>
      <Navbar></Navbar>
      <h1 className={s.Logo}>Lexiconline</h1>
    </header>
  );
};
