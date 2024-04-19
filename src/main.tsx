import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { ModalContextProvider } from "./context/useModal.tsx";
import { IModal } from "./components/modal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
      <IModal />
    </ModalContextProvider>
  </React.StrictMode>
);
