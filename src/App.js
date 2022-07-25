import { Provider } from "react-redux";
import "./App.css";
import CakeConainer from "./components/CakeConainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Redux with Hooks</h2>
        <HookCakeContainer />

        <hr />
        <h2>Only Redux</h2>
        <CakeConainer />

        <hr />
        <NewCakeContainer />

        <hr />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
