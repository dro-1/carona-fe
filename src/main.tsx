import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { OverlayContextProvider } from "./context/overlay.context.tsx";
import { UserContextProvider } from "./context/user.context.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OverlayContextProvider>
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 2000,
            }}
          />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </UserContextProvider>
    </OverlayContextProvider>
  </React.StrictMode>
);
