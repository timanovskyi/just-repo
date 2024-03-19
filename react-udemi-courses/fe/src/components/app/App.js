import "./App.scss";
import { StoreProvider } from "../../store/StoreProvider";
import Header from "../header/Header";
import AsideMenu from "../asideMenu/AsideMenu";
import { BrowserRouter } from "react-router-dom";
import Content from "../content/Content";

function App() {
  return (
    <StoreProvider>
      <Header></Header>
      <div className="content-wrapper">
        <BrowserRouter>
          <AsideMenu></AsideMenu>
          <Content></Content>
        </BrowserRouter>
      </div>
    </StoreProvider>
  );
}

export default App;
