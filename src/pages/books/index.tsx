import Head from "next/head";

import { Header } from "../../components/Header";
import { Book } from "../../components/Book";

import styles from "./books.module.scss";

type Book = {
  selfLink: string;
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    };
  };
};

type Response = {
  items: Book[];
};

export default function Books() {
  return (
    <>
      <Head>
        <title>Books | React.js</title>
      </Head>

      <main className={styles.container}>
        <Header />
        <section>
          <Book title="1" />
          <Book title="2" />
          <Book title="3" />
          <Book title="4" />
          <Book title="5" />
        </section>
      </main>
    </>
  );
}
