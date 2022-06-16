import Head from "next/head";
import Footer from "../Home/Footer";
import Cursor from "./Cursor";
const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Cursor />
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
