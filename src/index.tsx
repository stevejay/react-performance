import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import document from "global/document";
import { App } from "./app";
import * as serviceWorker from "./service-worker";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// const rootElement = document.getElementById("root");
// // Opt into Concurrent Mode
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// (ReactDOM as any).createRoot(rootElement).render(
//   <React.StrictMode>
//     <CacheProvider value={cache}>
//       <Router>
//         <App />
//       </Router>
//     </CacheProvider>
//   </React.StrictMode>
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
