import Head from "next/head";
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
    </div>
  );
};
export default Layout;
