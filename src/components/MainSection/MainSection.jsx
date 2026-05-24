import styles from "./MainSection.module.css";
import MainHeader from "./MainHeader/MainHeader";
import MainContent from "./MainContent/MainContent";
import { useEffect, useState } from "react";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Uh oh. Something went wrong!");
        }

        const data = await res.json();

        if (query) {
          const filteredProducts = data.filter((product) =>
            product.title.toLowerCase().startsWith(query.toLowerCase()),
          );

          setProducts(filteredProducts);

          if (filteredProducts.length === 0) {
            throw new Error(
              `"${query}" not found. Please use a different name.`,
            );
          }
        } else {
          setProducts(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, [query]);

  return (
    <div className={styles.centeringContainer}>
      <div className={styles.mainContainer}>
        <MainHeader setQuery={setQuery} />
        <MainContent products={products} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
}
