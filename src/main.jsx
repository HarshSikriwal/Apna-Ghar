import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider
} from "react-router-dom";

import App from "./App";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
