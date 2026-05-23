import styles from "./Bubble.module.css";

export default function Bubble({
  children,
  color = "white",
  style = {},
  className = "",
}) {
  const colorClass = {
    white: styles.colorWhite,
    black: styles.colorBlack,
    frosted: styles.colorFrosted,
  };

  return (
    <div
      className={`${styles.bubble} ${colorClass[color]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
