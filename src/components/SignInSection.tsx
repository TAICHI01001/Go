import { Link } from "react-router-dom";
import styles from "../styles/SignInSection.module.css"
const SignInSection = () => {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.text}>Create your account</h1>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <input className={styles.input} type="password" placeholder="password" />
            <input className={styles.input} type="text" placeholder="username" />
            <input className={styles.input} type="email" placeholder="email" />
            <input className={styles.input} type="number" placeholder="number" />
          </div>
          <Link to="/SignUp  ">
            <button className={styles.button}>Sign In</button>
          </Link>
          <p className={styles.foot}>
            already have an account ?
            <Link to="/SignUp">
              <button className="text-[#000] font-bold px-1">Sign Up</button>
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default SignInSection;
