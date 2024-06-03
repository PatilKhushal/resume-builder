import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Layout from "./Components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./store"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Layout/>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
