import DetailSection from "@/components/News-Detail/DetailSection";
import Hero from "@/components/News-Detail/Hero";
import Layout from "@/components/Common/Layout";
import MainTitle from "@/components/Common/MainTitle";
import MenuPackage from "@/components/Common/MenuPackage";
import Footer from "@/components/Home/Footer";
import styles from "@/styles/components/News-Details/index.module.css";
const NewsDetails = () => {
  return (
    <Layout>
      <MenuPackage />
      <div className={styles.MainTitleContainer}>
        <MainTitle title={"MobifinX News"} btntext={"Try Free Demo"} href="#" />
      </div>
      <Hero />
      <div className={styles.DetailSectionContainer}>
        <DetailSection />
      </div>
      <Footer />
    </Layout>
  );
};
export default NewsDetails;
