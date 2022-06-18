import styles from "./MainMenu.module.css";
import { Fragment } from "react";

const MainMenu = ({ color = "white" }) => {
  return (
    <Fragment>
      <div className={styles.mainMenuContainer}>
        <ul id="mainMenu" style={{ color: color }}>
          <li>
            <a>NEW</a>
          </li>
          <li>
            <a>ZARA</a>
          </li>
          <li>
            <a>SUIS</a>
          </li>
          <li>
            <a>ZARA ORIGINS</a>
          </li>
          <li>
            <a>JOIN LIFE</a>
          </li>
          <li>
            <a>STARTUP</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default MainMenu;
