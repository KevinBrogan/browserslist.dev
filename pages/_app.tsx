import "../styles/main.scss";
import React, { useEffect } from "react";

let ReactGA;
if (typeof window !== "undefined") {
  ReactGA = require("react-ga");
  ReactGA.initialize(process.env.GA);
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <Component {...pageProps} />;
}
