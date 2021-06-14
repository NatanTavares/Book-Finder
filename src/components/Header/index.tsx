import styles from "./styles.module.scss";

import { BiSearchAlt2 } from "react-icons/bi";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/images/mainIcon.png" alt="Google" />

        <div className={styles.inputContainer}>
          <input type="text" />
          <button type="button">
            <BiSearchAlt2 size={20} color="#FFF" />
          </button>
        </div>
      </div>
    </header>
  );
}
