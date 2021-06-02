import Link from "next/link";

import styles from "./styles.module.scss";

interface ListItemProps {
  img?: string;
  title: string;
  detailsUrl?: string;
}

export function ListItem({
  img,
  title,
  detailsUrl = "/search/react",
}: ListItemProps) {
  return (
    <Link href={detailsUrl}>
      <a className={styles.container}>
        <div className={styles.thumbnailContainer}>
          {!!img ? <img src={img} alt={title} /> : <p>No image available</p>}
        </div>

        <h1 className={styles.titleContainer}>{title}</h1>
      </a>
    </Link>
  );
}
