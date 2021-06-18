import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Book } from "../../components/Book";

import styles from "./books.module.scss";

type Book = {
  id: string;
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

interface BooksProps {
  books: Book[];
}

export default function Books({ books }: BooksProps) {
  const router = useRouter();
  const { volume } = router.query;

  return (
    <>
      <Head>
        <title>Books | {volume}</title>
      </Head>

      <main className={styles.container}>
        <Header />
        <section>
          {!!books &&
            books.map((book) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                img={book.volumeInfo.imageLinks?.thumbnail}
              />
            ))}
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (params) => {
  const { volume } = params.query;
  const res = await api.get<Response>(`?q=${volume}`);

  return {
    props: {
      books: res.data.items,
    },
  };
};
