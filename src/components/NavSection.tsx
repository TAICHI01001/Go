import styles from "../styles/NavSection.module.css";
import ComputerIcon from "../icons/ComputerIcon";
import SearchIcon from "../icons/SearchIcon";
import AccountIcon from "../icons/AccountIcon";
import CartIcon from "../icons/CartIcon";
import { Link } from "react-router-dom";
const NavSection = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <ComputerIcon color={"#000"} />
          </Link>
        </div>
        <div className={styles.search}>
          <input
            className={styles.title}
            type="text"
            placeholder="Search"
          />
          <SearchIcon />
        </div>
        <div className={styles.account}>
          <Link to="/Cart">
            <CartIcon width={35} height={35} />
          </Link>
          <Link to="/Account">
            <AccountIcon />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavSection;
