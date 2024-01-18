import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SiteContext from "./Components/context/SiteInfoContext.jsx";
import SwitchContext from "./Components/context/ToogleContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteContext>
      <SwitchContext>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </SwitchContext>
    </SiteContext>
  </React.StrictMode>,
);
