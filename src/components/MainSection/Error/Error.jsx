import styles from "./Error.module.css";

export default function Error({ message }) {
  return <div className={styles.error}>Error: {message}</div>;
}
