import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./home.module.scss";

export default function Home() {
  const [volume, setVolume] = useState("");
  const router = useRouter();

  async function handleVolume() {
    router.push(`books/${volume}`);
  }

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
          <input
            type="text"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />

          <button type="button" onClick={handleVolume}>
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
