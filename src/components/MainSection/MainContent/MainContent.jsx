import styles from "./MainContent.module.css";
import Card from "./Card/Card";
import Error from "../Error/Error";

export default function MainContent({ products, isLoading, error }) {
  return (
    <div className={styles.mainContent}>
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        !error &&
        products.map((product) => {
          return (
            <Card
              key={product.id}
              image={product.image}
              category={product.category}
              title={product.title}
              stars={product.rating.rate}
              count={product.rating.count}
              price={product.price}
            />
          );
        })}
      {error && <Error message={error} />}
    </div>
  );
}
