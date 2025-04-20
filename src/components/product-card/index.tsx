import { Product } from "@/domain/product";
import styles from "./styles.module.css";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={product.imageUrl} alt="Product Image"/>
            <h3 className={styles.nameText}>{product.name}</h3>
            <p className={styles.descriptionText}>{product.description}</p>
            <strong className={styles.priceText}>R${product.price.toFixed(2)}</strong>
        </div>
    );
};

export default ProductCard;
