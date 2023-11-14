import "./App.scss";
import {StoreProvider} from "../../store/StoreProvider";
import Header from "../header/Header";
import {Router} from "react-router-dom";
import AsideMenu from "../asideMenu/AsideMenu";

function App() {
    return (
        <StoreProvider>
            <Header></Header>
            <div className="content-wrapper">
                <Router location={''} navigator={}>
                    <AsideMenu></AsideMenu>
                </Router>{" "}
            </div>
        </StoreProvider>
    );
}

export default App;
