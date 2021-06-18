import { useRouter } from "next/router";
import { useState } from "react";

import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./styles.module.scss";

export function Header() {
  const router = useRouter();
  const [volume, setVolume] = useState("");

  function handleNewVolumes() {
    router.push(`/books/${volume}`);
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/images/mainIcon.png" alt="Google" />

        <div className={styles.inputContainer}>
          <input
            type="text"
            onChange={(e) => setVolume(e.target.value)}
            placeholder="Find any book"
          />
          <button type="button" onClick={handleNewVolumes}>
            <BiSearchAlt2 size={20} color="#FFF" />
          </button>
        </div>
      </div>
    </header>
  );
}
