import { useSearchContext } from "../../hooks/SearchContext";

import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./styles.module.scss";

export function Header() {
  const { searchTerm, handleSearchTerm, handleNewVolumes } = useSearchContext();

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <a href="/">
          <img src="/images/mainIcon.png" alt="Google" />
        </a>

        <form
          className={styles.inputContainer}
          onSubmit={(event) => handleNewVolumes(event)}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearchTerm(e.target.value)}
          />
          <button type="button">
            <BiSearchAlt2 size={20} color="#FFF" />
          </button>
        </form>
      </div>
    </header>
  );
}
