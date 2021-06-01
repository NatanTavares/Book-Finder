import styles from "./styles.module.scss";

import { BiSearchAlt2 } from "react-icons/bi";
import { api } from "../../services/api";

export function Header() {
  async function handlerBooks() {
    const response = await api.get("/volumes?q=react");
    console.log(response.data);
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/images/mainIcon.png" alt="Google" />

        <div className={styles.inputContainer}>
          <input type="text" />
          <button type="button" onClick={handlerBooks}>
            <BiSearchAlt2 size={20} color="#FFF" />
          </button>
        </div>
      </div>
    </header>
  );
}
