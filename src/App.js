// Components & Pages
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
// Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
