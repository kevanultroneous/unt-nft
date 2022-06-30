import Head from "next/head";

const Layout = ({ title, children, description, keywords }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="" />
        <meta name="keywords" content={keywords} key="" />
      </Head>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
