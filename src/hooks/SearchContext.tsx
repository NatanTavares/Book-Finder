import { useRouter } from "next/router";
import {
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useState,
} from "react";

type SearchContextData = {
  searchTerm: string;
  handleSearchTerm: (term: string) => void;
  handleNewVolumes: (e: FormEvent) => void;
};

interface SearchProviderProps {
  children: ReactNode;
}

const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTerm(term: string) {
    setSearchTerm(term);
  }

  function handleNewVolumes(e: FormEvent) {
    e.preventDefault();
    if (!!searchTerm) {
      router.push(`/books/${searchTerm}`);
    }
  }

  return (
    <SearchContext.Provider
      value={{ searchTerm, handleSearchTerm, handleNewVolumes }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = (): SearchContextData =>
  useContext(SearchContext);
