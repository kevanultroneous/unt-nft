import Head from "next/head";
import Footer from "../Home/Footer";
import Cursor from "./Cursor";
const Layout = ({ title, children, description, keywords }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="" />
        <meta name="keywords" content={keywords} key="" />
      </Head>
      <main>
        {/* <Cursor /> */}
        {children}
      </main>
    </div>
  );
};
export default Layout;
