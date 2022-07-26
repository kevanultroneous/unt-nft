import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  const [cursor, setCursor] = useState(false);
  useEffect(() => {
    setCursor(true);
  }, []);
  return (
    <>
      {cursor ? (
        <AnimatedCursor
          innerSize={10}
          outerSize={50}
          color="162, 29, 52"
          outerAlpha={0.1}
          innerScale={0.1}
          outerScale={2}
        />
      ) : null}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
