import { createContext, ReactNode, useContext, useState } from "react";
import api from "../services/googleBooksApi";

interface BookContextData {
  term: string;
  handleTerm: (argument: string) => void;
  fetchBooks: () => Promise<void>;
}

interface BookProviderProps {
  children: ReactNode;
}

const BookContext = createContext({} as BookContextData);

export function BookProvider({ children }: BookProviderProps) {
  const [term, setTerm] = useState<string>("");

  function handleTerm(argument: string) {
    setTerm(argument);
  }

  async function fetchBooks() {
    api.get(`${term}`).then((response) => console.log(response));
  }

  return (
    <BookContext.Provider
      value={{
        term,
        handleTerm,
        fetchBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export const UseBook = (): BookContextData => useContext(BookContext);
