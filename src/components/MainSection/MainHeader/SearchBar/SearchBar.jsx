import Bubble from "../../../Bubble/Bubble";
import styles from "./SearchBar.module.css";
import iconSearch from "../../../../assets/iconSearch.svg";

export default function SearchBubble({ input, setInput }) {
  return (
    <Bubble
      color="white"
      style={{
        border: "1px #E0E0E0 solid",
        width: "323px",
        display: "flex",
        justifyContent: "start",
        gap: "8px",
      }}
    >
      <img src={iconSearch} alt="icon-search" />
      <input
        className={styles.input}
        type="text"
        placeholder="Search Products"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </Bubble>
  );
}
