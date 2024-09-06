import s from "./Style.module.scss";

export const CutOut = ({ title, children }) => {
  return (
    <div className={s.Container}>
      <div className={s.CutOut}>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};
