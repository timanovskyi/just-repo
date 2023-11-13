import "./App.css";
import { StoreProvider } from "../store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <div></div>
    </StoreProvider>
  );
}

export default App;
