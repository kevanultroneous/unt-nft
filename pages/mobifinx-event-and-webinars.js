import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import EventsHero from "@/components/Events/EventsHero";
import MoreEvents from "@/components/Events/MoreEvents";
import PastEvent from "@/components/Events/PastEvent";
import Footer from "@/components/Home/Footer";

const events = () => {
  return (
    <Layout
      title={"MobifinX Events, Webinars and Conferences"}
      description={
        " MobifinX is a global leader in Crypto Exchange and Enterprise Blockchain Solutions. Join us for Insightful Sessions Across the Globe on Transformation "
      }
    >
      <MenuPackage />
      <EventsHero />
      <MoreEvents />
      <PastEvent />
      <Footer />
    </Layout>
  );
};

export default events;
