import styles from "./Card.module.css";
import grayStar from "../../../../assets/iconGrayStar.svg";
import goldStar from "../../../../assets/iconGoldStar.svg";
// import cardDummyImage from "../../../../assets/cardDummyImage.jpg";
import Bubble from "../../../Bubble/Bubble";
import iconSave from "../../../../assets/iconSave.svg";

export default function Card({ image, category, title, stars, count, price }) {
  const roundedStars = Math.round(stars);
  return (
    <div className={styles.card}>
      {/* Card Image and Save Button*/}
      <div className={styles.imageContainer}>
        <img src={image} alt={`${image} image`} className={styles.image} />

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
        <div className={styles.category}>{category}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.rating}>
          {/* <div className={styles.stars}>
            <img src={goldStar} alt="gold-star" className={styles.star} />
            <img src={goldStar} alt="gold-star" className={styles.star} />
            <img src={goldStar} alt="gold-star" className={styles.star} />
            <img src={grayStar} alt="gray-star" className={styles.star} />
            <img src={grayStar} alt="gray-star" className={styles.star} />
          </div> */}
          <div className={styles.stars}>
            {[...Array(5)].map((v, index) => (
              <img
                key={index}
                src={index < roundedStars ? goldStar : grayStar}
                alt="star"
                className={styles.star}
              />
            ))}
          </div>
          <p>({count})</p>
        </div>
      </div>
      <div className={styles.price}>${price}</div>
    </div>
  );
}
