import { Route } from "react-router-dom";
import MainPages from "./pages/mainpages";

function App() {
  return (
    <Route exact path="/">
      <MainPages />
    </Route>
  );
}

export default App;
