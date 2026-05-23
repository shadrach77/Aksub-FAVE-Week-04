import styles from "./MainSection.module.css";
import MainHeader from "./MainHeader/MainHeader";
import MainContent from "./MainContent/MainContent";

export default function Main() {
  return (
    <div className={styles.centeringContainer}>
      <div className={styles.mainContainer}>
        <MainHeader />
        <MainContent />
      </div>
    </div>
  );
}
