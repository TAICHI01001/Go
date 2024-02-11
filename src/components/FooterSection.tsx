import styles from "../styles/FooterSection.module.css";
import YoutubeIcon from "../icons/YoutubeIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import { Link } from "react-router-dom";

const Youtube = "https://www.youtube.com/channel/UCw3X4b2wE_Mj4gTBjaSaEGA";
const Github = "https://github.com/TAICHI01001";
const Linkedin = "https://www.linkedin.com/in/anothai-vichapaiboon-a88790260/";

const FooterSection = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.blog}>
          <h4>About us</h4>
          <ul>
            <li className="pt-1.5">Work with us</li>
            <li className="pt-1.5">News and activities</li>
            <li className="pt-1.5">Join our business</li>
          </ul>
        </div>
        <div className={styles.blog}>
          <h4>Help</h4>
          <ul>
            <li className="pt-1.5">Frequently asked questions</li>
            <li className="pt-1.5">Call Center 12-112-1122</li>
            <li className="pt-1.5">Contact us</li>
            <li className="pt-1.5">Member service 12-112-1122</li>
          </ul>
        </div>

        <div className={styles.blog}>
          <h4>Follow us</h4>
          <div className={styles.icon}>
            <Link to={Youtube}>
              <YoutubeIcon />
            </Link>
            <Link to={Github}>
              <GithubIcon />
            </Link>
            <Link to={Linkedin}>
              <LinkedinIcon />
            </Link>
          </div>
          <p>Receive special promotions and deals before anyone else</p>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
            />
            <button className={styles.button}>Participate</button>
          </div>
        </div>

      </footer>
    </>
  );
};

export default FooterSection;
