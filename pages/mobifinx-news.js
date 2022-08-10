import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Footer from "@/components/Home/Footer";
import NewsHead from "@/components/News/NewsHead";
import NewsMainComponent from "@/components/News/NewsMainComponent";

const News = () => {
  return (
    <Layout title={"news"}>
      <MenuPackage />
      <NewsHead />
      <NewsMainComponent />
      <Footer />
    </Layout>
  );
};

export default News;
