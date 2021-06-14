import Link from "next/link";

import styles from "./styles.module.scss";

interface BookProps {
  img?: string;
  title: string;
  detailsUrl?: string;
}

export function Book({ img, title, detailsUrl = "/book/Test" }: BookProps) {
  return (
    <Link href={detailsUrl}>
      <a className={styles.container}>
        <div className={styles.thumbnailContainer}>
          {!!img ? <img src={img} alt={title} /> : "No image available"}
        </div>

        <h1 className={styles.titleContainer}>{title}</h1>
      </a>
    </Link>
  );
}
