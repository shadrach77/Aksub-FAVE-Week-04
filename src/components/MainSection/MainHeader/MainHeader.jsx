import styles from "./MainHeader.module.css";
import Bubble from "../../Bubble/Bubble";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";

export default function MainHeader({ setQuery }) {
  const [input, setInput] = useState("");

  function handleSearch(query) {
    setQuery(query);
  }

  return (
    <div className={styles.mainHeader}>
      <p className={styles.mainText}>Products</p>
      <div className={styles.mainNav}>
        <SearchBar
          color="white"
          style={{ border: "1px #E0E0E0 solid" }}
          input={input}
          setInput={setInput}
        >
          Search Products
        </SearchBar>

        <Bubble
          color="black"
          onClick={() => {
            handleSearch(input);
          }}
        >
          Search
        </Bubble>
      </div>
    </div>
  );
}
