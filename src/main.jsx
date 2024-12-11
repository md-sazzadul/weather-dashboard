import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Spinner = React.lazy(() => import("./components/Spinner"));
const App = React.lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
