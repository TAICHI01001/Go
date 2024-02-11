import styles from "../styles/ProductSection.module.css";
import generateMockProducts from "../mock/mockProducts";
import { Product } from "../interface/Product";
import { Link } from "react-router-dom";
import CartIcon from "../icons/CartIcon";

const MAX_DESCRIPTION_LENGTH = 200;

const ProductSection = () => {
  const mockProducts: Product[] = generateMockProducts();
  return (
    <>
      <section className={styles.productSection}>
        {mockProducts.map((product) => (
          <div className={styles.product} key={product.id}>
            <Link to={`/Product/ProductDetail/${product.id}`}>
              <div className={styles.image}>{product.image}</div>
            </Link>
            <strong>{product.name}</strong>
            <p className={styles.description}>
              {product.description.length > MAX_DESCRIPTION_LENGTH
                ? `${product.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
                : product.description}
            </p>
            <div className={styles.foot}>
              <strong>${product.price.toFixed(3)}</strong>
                <CartIcon width={20} height={20} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductSection;
