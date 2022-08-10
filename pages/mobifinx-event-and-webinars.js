import Layout from "@/components/Common/Layout";
import MenuPackage from "@/components/Common/MenuPackage";
import EventsHero from "@/components/Events/EventsHero";
import MoreEvents from "@/components/Events/MoreEvents";
import PastEvent from "@/components/Events/PastEvent";
import Footer from "@/components/Home/Footer";

const events = () => {
  return (
    <Layout title={"Events"}>
      <MenuPackage />
      <EventsHero />
      <MoreEvents />
      <PastEvent />
      <Footer />
    </Layout>
  );
};

export default events;
