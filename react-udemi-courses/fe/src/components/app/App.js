import "./App.css";
import { StoreProvider } from "../../store/StoreProvider";
import Header from "../header/Header";

function App() {
  return (
    <StoreProvider>
      <Header></Header>
    </StoreProvider>
  );
}

export default App;
