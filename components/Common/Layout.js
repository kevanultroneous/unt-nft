import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
