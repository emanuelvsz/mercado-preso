import Header from "@/components/header";
import styles from "./page.module.css";
import ProductCardList from "@/components/product-card-list";

export default function Home() {
  return (
    <div className={styles.page}>
        <Header />
        <div className={styles.body}>
          <ProductCardList />
        </div>
    </div>
  );
}
