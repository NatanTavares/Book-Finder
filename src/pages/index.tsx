import Head from "next/head";
import { useSearchContext } from "../hooks/SearchContext";

import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./home.module.scss";

export default function Home() {
  const { searchTerm, handleSearchTerm, handleNewVolumes } = useSearchContext();

  return (
    <>
      <Head>
        <title>Book Finde</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.logoContainer}>
          <img src="/images/mainIcon.png" alt="Google" />
          <span>Books</span>
        </div>

        <form
          className={styles.inputContainer}
          onSubmit={(event) => handleNewVolumes(event)}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearchTerm(e.target.value)}
          />

          <button type="submit">
            <BiSearchAlt2 size={20} color="#FFF" />
          </button>
        </form>

        <p>
          The world's most diverse index for searching books in their entirety.
        </p>
      </main>
    </>
  );
}
