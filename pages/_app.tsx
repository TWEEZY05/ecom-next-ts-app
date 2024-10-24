import type { AppProps } from "next/app";
import Header from "../components/Layout/Header";

import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/600.css"; // Semi-Bold
import "@fontsource/inter/700.css"; // Bold
import "@fontsource/work-sans/300.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/700.css";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header pageTitle={pageProps.pageTitle || "Главная"} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
