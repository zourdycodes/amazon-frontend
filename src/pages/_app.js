import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-N5PWSZ6" });
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
