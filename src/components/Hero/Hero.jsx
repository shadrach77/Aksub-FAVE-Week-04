import styles from "./Hero.module.css";
import Bubble from "../Bubble/Bubble";
import iconBulb from "../../assets/iconBulb.svg";
import iconCart from "../../assets/iconCart.svg";
import iconPhone from "../../assets/iconPhone.svg";
import iconWindow from "../../assets/iconWindow.svg";

export default function Hero() {
  return (
    <div className={styles.centeringContainer}>
      <div className={styles.mainContainer}>
        <div>
          <Bubble color="frosted">
            <div className={styles.navLinks}>
              <div className={styles.navLink}>
                <img src={iconCart} alt="cart-icon" />
                Products
              </div>
              <div className={styles.navLink}>
                <img src={iconBulb} alt="bulb-icon" />
                Inspiration
              </div>
              <div className={styles.navLink}>
                <img src={iconWindow} alt="window-icon" />
                Service
              </div>
              <div className={styles.navLink}>
                <img src={iconPhone} alt="phone-icon" />
                Support
              </div>
            </div>
          </Bubble>
        </div>

        <main className={styles.headerText}>
          <p className={styles.mainText}>
            Your One-Stop Shop for Everyday Essentials and Unique Finds.
          </p>
          <p className={styles.secondaryText}>
            Explore a seamless shopping experience with fast delivery,
            exceptional customer service, and exclusive deals that make every
            purchase worthwhile. Shop smart, shop easy, shop with ShopSphere!
          </p>
        </main>

        <div className={styles.headerBottom}>
          <div className={styles.headerBottomLeft}>
            <Bubble color="white">Categories</Bubble>
            <Bubble color="frosted">
              <div className={styles.bottomNavLinks}>
                <div className={styles.navLink}>Men</div>
                <div>•</div>
                <div className={styles.navLink}>Woman</div>
                <div>•</div>
                <div className={styles.navLink}>Accesories</div>
                <div>•</div>
                <div className={styles.navLink}>Sale</div>
              </div>
            </Bubble>
          </div>

          <Bubble color="white">Contact Us</Bubble>
        </div>
      </div>
    </div>
  );
}
