import type { AppProps } from "next/app";

import "../theme/globalStyles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      css={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}
