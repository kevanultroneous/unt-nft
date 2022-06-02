import { Image } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/components/home/Products.module.css";
import AOS from "aos";
import { useEffect } from "react";
const Products = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const ProductsList = [
    {
      name: "Derivatives Trading",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.",
      link1: "",
      link2: "",
      img: "/assets/images/machine-1.svg",
    },
    {
      name: "Spot Trading",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.",
      link1: "",
      link2: "",
      img: "/assets/images/machine-2.svg",
    },
    {
      name: "NFT",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.",
      link1: "",
      link2: "",
      img: "/assets/images/machine-3.svg",
    },
    {
      name: "DeFi",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.",
      link1: "",
      link2: "",
      img: "/assets/images/machine-4.svg",
    },
    {
      name: "OTC Desk",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.",
      link1: "",
      link2: "",
      img: "/assets/images/machine-5.svg",
    },
    {
      name: "P2P Trading",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.",
      link1: "",
      link2: "",
      img: "/assets/images/machine-6.svg",
    },
    {
      name: "Private Blockchain & Tokenization",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.",
      link1: "",
      link2: "",
      img: "/assets/images/machine-7.svg",
    },
    {
      name: "Fund Raising Launchpad",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.",
      link1: "",
      link2: "",
      img: "/assets/images/machine-8.svg",
    },
  ];
  return (
    <div className={styles.OurProductsContainer}>
      <h3
        className={styles.OurProductsHeading}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        Our Products
      </h3>
      <div className={styles.OurProductsCardsContainer}>
        <div className={styles.OurProductsCard}>
          {/*  */}
          {ProductsList.map((value, index) => (
            <div
              data-aos={"zoom-in"}
              data-aos-duration="3000"
              className={`${styles.OurProductsCardsMain}`}
            >
              <div className={styles.OurProductsCardSub}>
                <div className={styles.OurProductsCardImage}>
                  <Image src={value.img} />
                </div>
                <div className={styles.OurProductsCardDetail}>
                  <h4 className={styles.OurProductsHead}>{value.name}</h4>
                  <p className={styles.OurProductsParagraph}>{value.detail}</p>
                  <div className={styles.LearnMore}>
                    Learn More{" "}
                    <Image src="/assets/images/sendBtn.svg" height={15} />
                  </div>
                </div>
                <div>
                  <div className={styles.BtnContainer}>
                    <div
                      className={styles.RequestDemo}
                      // style={{ opacity: "0" }}
                    >
                      Request a Demo <HiOutlineExternalLink />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
