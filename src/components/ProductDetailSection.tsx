import { useParams } from "react-router-dom";
import mockProductsDetail from "../mock/mockProductDetail";
import { ProductDetails } from "../interface/Product";
import styles from "../styles/ProductDetailSection.module.css";

const ProductDetail = () => {
  const { id } = useParams<{ id?: string }>();
  const productId = parseInt(id ?? "", 10); // Use optional chaining and nullish coalescing
  const product: ProductDetails | undefined = mockProductsDetail().find(
    (p) => p.id === productId
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.product}>
        <div className={styles.left}>
          <div>{product.image}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.name}>{product.name}</div>
          <p className={styles.price}>${product.price.toFixed(3)}</p>
          <hr />
          <p className={styles.description}>{product.description}</p>
          <div className={styles.foot}>
            <p>weight</p>
            <p>{product.code}</p>
          </div>
          <hr />
          <div className={styles.foot}>
            <p>code</p>
            <p>{product.code}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
