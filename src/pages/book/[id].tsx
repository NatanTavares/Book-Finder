import Head from "next/head";
import { GetServerSideProps } from "next";
import { api } from "../../services/api";

import { Header } from "../../components/Header";

import styles from "./book.module.scss";

type Book = {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: String[];
    publishedDate: string;
    description: string;
    categories: String[];
    language: string;
    previewLink: string;
    imageLinks: {
      thumbnail?: string;
    };
  };
};

interface BookProps {
  book: Book;
}

export default function Book({ book }: BookProps) {
  return (
    <>
      <Head>
        <title>{book.volumeInfo.title}</title>
      </Head>

      <main className={styles.container}>
        <Header />

        <section>
          <div className={styles.thumbnailContainer}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="test" />
          </div>

          <div className={styles.details}>
            <div className={styles.headerDetails}>
              <div className={styles.identification}>
                <div>
                  <h2>{book.volumeInfo.title}</h2>
                  <h3>{book.volumeInfo.subtitle}</h3>
                </div>

                <div>
                  <time>{book.volumeInfo.publishedDate}</time>
                  <span>{book.volumeInfo.language}</span>
                </div>
              </div>

              <div className={styles.specifications}>
                <div>
                  <strong>Categories:</strong>
                  <p>{book.volumeInfo.categories[0]}</p>
                </div>
                <div>
                  <strong>Authors:</strong>
                  <p>{book.volumeInfo.authors[0]}</p>
                </div>
                <div>
                  <strong>InfoLink:</strong>
                  <a href={`${book.volumeInfo.previewLink}`} target="blank">
                    <p>{book.volumeInfo.previewLink}</p>
                  </a>
                </div>
              </div>
            </div>

            <article
              dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (params) => {
  const { id } = params.query;

  const res = await api.get<Book>(`${id}`);
  const book = res.data;

  return {
    props: { book },
  };
};
