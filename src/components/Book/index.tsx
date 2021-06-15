import Link from "next/link";

import styles from "./styles.module.scss";

interface BookProps {
  id: string;
  img?: string;
  title: string;
}

export function Book({ id, img, title }: BookProps) {
  return (
    <Link href={`/book/${id}`}>
      <a className={styles.container}>
        <div className={styles.thumbnailContainer}>
          {!!img ? <img src={img} alt={title} /> : "No image available"}
        </div>

        <h1 className={styles.titleContainer}>{title}</h1>
      </a>
    </Link>
  );
}
