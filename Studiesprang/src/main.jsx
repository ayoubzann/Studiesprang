import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Clerk PK not found.");
}

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "transparent", // Set to "transparent" to remove the background color
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
      <NextUIProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </NextUIProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
