import Head from "next/head";

import { BiSearchAlt2 } from "react-icons/bi";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Finder Books</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.logoContainer}>
          <img src="/images/mainIcon.png" alt="Google" />
          <span>Books</span>
        </div>

        <div className={styles.inputContainer}>
          <input type="text" />

          <button type="button">
            <BiSearchAlt2 size={20} color="#FFF" />
          </button>
        </div>

        <p>
          The world's most diverse index for searching books in their entirety.
        </p>
      </main>
    </>
  );
}
