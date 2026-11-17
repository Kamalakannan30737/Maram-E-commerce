import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

import App from "./app/App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <Provider store={store}>
      <App />
      </Provider>
    </StyledEngineProvider>
  </StrictMode>
);
