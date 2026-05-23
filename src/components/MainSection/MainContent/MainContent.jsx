import styles from "./MainContent.module.css";
import Card from "./Card/Card";

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
