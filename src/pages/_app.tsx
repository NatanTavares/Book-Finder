import { AppProps } from "next/app";
import { SearchProvider } from "../hooks/SearchContext";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  );
}

export default MyApp;
