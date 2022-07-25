import { Provider } from "react-redux";
import "./App.css";
import CakeConainer from "./components/CakeConainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeConainer />
      </div>
    </Provider>
  );
}

export default App;
