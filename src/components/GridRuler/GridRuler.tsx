import { FC } from "react";
import styles from "./GridRuler.module.scss";
import cn from "classnames";
import { v4 as uuid } from "uuid";

type Spacing = "sm" | "md" | "lg";

const GridRuler: FC<{ spacing: Spacing }> = ({ spacing }) => {
 const classNames = cn(styles.GridRuler, {
  [styles[`GridRuler_spacing_${spacing}`]]: spacing,
 });

 return (
  <div className={classNames}>
   {Array(12)
    .fill(1)
    .map((number) => (
     <div className={styles.GridRuler_item} key={uuid()} />
    ))}
  </div>
 );
};

export default GridRuler;
