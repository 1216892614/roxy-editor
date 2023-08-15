import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <div className=" flex flex-col items-center justify-center h-screen w-screen">
                <App />
            </div>
        </ThemeProvider>
    </React.StrictMode>
);
