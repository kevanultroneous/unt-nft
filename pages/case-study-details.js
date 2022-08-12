import DetailSection from "@/components/CaseStudy-Detail/DetailSection";
import Hero from "@/components/CaseStudy-Detail/Hero";
import Layout from "@/components/Common/Layout";
import MainTitle from "@/components/Common/MainTitle";
import MenuPackage from "@/components/Common/MenuPackage";
import Footer from "@/components/Home/Footer";
import styles from "@/styles/components/CaseStudy-Detail/index.module.css";
const CaseStudyDetails = () => {
  return (
    <Layout>
      <MenuPackage />
      <div className={styles.MainTitleContainer}>
        <MainTitle
          title={"MobifinX Case Studies"}
          btntext={"Try Free Demo"}
          href=""
        />
      </div>
      <Hero />
      <div className={styles.DetailSectionContainer}>
        <DetailSection />
      </div>
      <Footer />
    </Layout>
  );
};
export default CaseStudyDetails;
