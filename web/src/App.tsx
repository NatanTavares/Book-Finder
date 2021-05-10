import { BrowserRouter as Router } from "react-router-dom";
import { BookProvider } from "./contexts/BookContext";

import Routes from "./routes";

export default function App() {
  return (
    <div className="App">
      <Router>
        <BookProvider>
          <Routes />
        </BookProvider>
      </Router>
    </div>
  );
}
