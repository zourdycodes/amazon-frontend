import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { Provider as AuthProvider } from "next-auth/client";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-N5PWSZ6" });
  }, []);

  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
