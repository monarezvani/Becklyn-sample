import { Provider } from "react-redux";
import "../styles/global.css";

import type { AppProps } from "next/app";
import { store } from "@/features/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
