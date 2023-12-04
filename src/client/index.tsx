import { createRoot } from "react-dom/client";
import { App } from "./App";

const appEl: Element | null = document.getElementById("app");
if (appEl) {
  const root = createRoot(appEl);
  root.render(<App />);
}
