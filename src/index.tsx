import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle from "global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "contexts/AuthProvider";
import { OnlineStatusProvider } from "contexts/OnlineProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <OnlineStatusProvider>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <GlobalStyle />
              <App />
              <ToastContainer />
              <ReactQueryDevtools
                initialIsOpen={false}
                position="bottom-right"
              />
            </QueryClientProvider>
          </AuthProvider>
        </OnlineStatusProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
