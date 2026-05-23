import styles from "./Card.module.css";
import grayStar from "../../../../assets/iconGrayStar.svg";
import goldStar from "../../../../assets/iconGoldStar.svg";
import cardDummyImage from "../../../../assets/cardDummyImage.jpg";
import Bubble from "../../../Bubble/Bubble";
import iconSave from "../../../../assets/iconSave.svg";

export default function Card() {
  return (
    <div className={styles.card}>
      {/* Card Image and Save Button*/}
      <div className={styles.imageContainer}>
        <img
          src={cardDummyImage}
          alt="card-drummy-image"
          className={styles.image}
        />

        <Bubble color="frosted" className={styles.saveButton}>
          <img
            src={iconSave}
            alt="icon-save"
            className={styles.saveButtonIcon}
          />
        </Bubble>
      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <div className={styles.category}>Shoes</div>
        <div className={styles.title}>Shoes Reebok Zig Kinetica 3</div>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <img src={goldStar} alt="gold-star" className={styles.star} />
            <img src={goldStar} alt="gold-star" className={styles.star} />
            <img src={goldStar} alt="gold-star" className={styles.star} />
            <img src={grayStar} alt="gray-star" className={styles.star} />
            <img src={grayStar} alt="gray-star" className={styles.star} />
          </div>
          <p>(48)</p>
        </div>
      </div>
      <div className={styles.price}>$199.00</div>
    </div>
  );
}
