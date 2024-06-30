import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Path from "./routes.jsx";
import "./global.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
      <BrowserRouter>
      <main className="max-w-[1440px] m-auto dark:dark text-foreground bg-background bg-[url('/images/blur_bg.png')] bg-cover">
        <Path />

      </main>
  </BrowserRouter>
    </NextUIProvider>
);
