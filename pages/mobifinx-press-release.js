import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import Footer from "@/components/Home/Footer";
import PressHead from "@/components/Press/PressHead";
import PressMainComponent from "@/components/Press/PressMainComponent";

const press = () => {
  return (
    <Layout
      title={" MobifinX Announcements for Crypto world"}
      description={
        "Here you can Explore our official statement and announcement for the growth of our brand and product. "
      }
    >
      <MenuPackage />
      <PressHead />
      <PressMainComponent />
      <Footer />
    </Layout>
  );
};

export default press;
