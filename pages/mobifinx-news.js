import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Footer from "@/components/Home/Footer";
import NewsHead from "@/components/News/NewsHead";
import NewsMainComponent from "@/components/News/NewsMainComponent";

const News = () => {
  return (
    <Layout
      title={"  MobifinX Newsroom "}
      description={
        " Here you can get our company-related latest news and updates about awards, global presence, and global influencers that talking about our brands "
      }
    >
      <MenuPackage />
      <NewsHead />
      <NewsMainComponent />
      <Footer />
    </Layout>
  );
};

export default News;
