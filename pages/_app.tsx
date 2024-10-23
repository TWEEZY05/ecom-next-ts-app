import type { AppProps } from "next/app";
import Header from "../components/Layout/Header";

import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/600.css"; // Semi-Bold
import "@fontsource/inter/700.css"; // Bold
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  console.log("pageProps", pageProps);
  return (
    <>
      <Header pageTitle={pageProps.pageTitle || "Главная"} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
