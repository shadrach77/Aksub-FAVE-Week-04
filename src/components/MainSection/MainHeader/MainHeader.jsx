import styles from "./MainHeader.module.css";
import Bubble from "../../Bubble/Bubble";
import SearchBar from "./SearchBar/SearchBar";

export default function MainHeader() {
  return (
    <div className={styles.mainHeader}>
      <p className={styles.mainText}>Products</p>
      <div className={styles.mainNav}>
        <SearchBar color="white" style={{ border: "1px #E0E0E0 solid" }}>
          Search Products
        </SearchBar>

        <Bubble color="black">Search</Bubble>
      </div>
    </div>
  );
}
