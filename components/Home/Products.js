import { Alert, Image } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/components/home/Products.module.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import LearnMore from "../Common/LearnMore";
import { MdKeyboardArrowRight } from "react-icons/md";
import ActionButtonV3 from "../Common/ActionButtonV3";
const Products = () => {
  const [xcord, setXcord] = useState(0);
  const [ycord, setYcord] = useState(0);
  const [opacitycord, setOpacitycord] = useState("0");
  const [targetd, setTargetD] = useState("");
  const [currentItem, setCurrentItem] = useState(0);
  const upper = (per) => {
    if (per > 26) {
      setCurrentItem(1);
    } else if (per > 27) {
      setCurrentItem(2);
    } else if (per > 28) {
      setCurrentItem(3);
    } else if (per > 29) {
      setCurrentItem(4);
    } else if (per > 30) {
      setCurrentItem(5);
    } else if (per > 31) {
      setCurrentItem(6);
    } else if (per > 32) {
      setCurrentItem(7);
    }
  };
  const lower = (per) => {
    if (per < 26) {
      setCurrentItem(0);
    } else if (per < 27) {
      setCurrentItem(1);
    } else if (per < 28) {
      setCurrentItem(2);
    } else if (per < 29) {
      setCurrentItem(3);
    } else if (per < 30) {
      setCurrentItem(4);
    } else if (per < 31) {
      setCurrentItem(5);
    } else if (per < 32) {
      setCurrentItem(6);
    } else if (per < 33) {
      setCurrentItem(7);
    } else {
      setCurrentItem(0);
    }
  };
  useEffect(() => {
    AOS.refresh();
    AOS.init();
    window.addEventListener("scroll", () => {
      var findProduct = document.getElementsByClassName(
        styles.OurProductsContainer
      )[0];
      var targetSection = findProduct.getBoundingClientRect();
      if (targetSection.y <= 0) {
        setTargetD("fixed");
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;

        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        const scrolled = winScroll / height;
        const per = scrolled * 100;

        upper(per);
        lower(per);
      } else {
      }
    });
  }, []);
  const ProductsList = [
    {
      name: "MxTrade",
      detail:
        "A Centralized Trading platform for Spot trading, OTC desk, and P2P Trading. Offers world-class trading technology, robust legal and compliance solutions, and round-the-clock support. Automate trades without involving a central authority and connect buyers and sellers directly.",
      link1: "",
      link2: "",
      img: "/assets/images/mh1.svg",
      btnc: "linear-gradient(to right, #F27E63 50%, transparent 50%)",
      border: "1px solid #F27E63",
    },
    {
      name: "MxFuture",
      detail:
        "A Top-notch derivative and Margin exchange platform that promises to open up new investment avenues for traders. Gain access to a pool of untapped crypto holders and accelerate the transaction process with automated smart contracts.",
      link1: "",
      link2: "",
      img: "/assets/images/MF.png",
      btnc: "linear-gradient(to right, #00ACD7 50%, transparent 50%)",
      border: "1px solid #00ACD7",
    },
    {
      name: "MxDex",
      detail:
        "We help you facilitate the large-scale trading of crypto assets between many users with a decentralized trading platform. A fast and transparent solution enables users to have complete control over their accounts and assets. ",
      link1: "",
      link2: "",
      img: "/assets/images/mh3.svg",
      btnc: "linear-gradient(to right, #F2AB27 50%, transparent 50%)",
      border: "1px solid #F2AB27",
    },
    {
      name: "MxFi",
      detail:
        "Take a shift from traditional and centralized finance to peer-to-peer and decentralized technologies based on the Ethereum blockchain. The DeFi ecosystem includes banking, payments and settlements, lending and borrowing platforms.",
      link1: "",
      link2: "",
      img: "/assets/images/mh4.svg",
      btnc: "linear-gradient(to right, #4BA6A6 50%, transparent 50%)",
      border: "1px solid #4BA6A6",
    },
    {
      name: "MxLaunch",
      detail:
        "A digital asset fundraising platform will boost fundraising opportunities for IEO, ICO, IDO, and IGO development. Helps to know more about the product and its roadmap.",
      link1: "",
      link2: "",
      img: "/assets/images/mh5.svg",
      btnc: "linear-gradient(to right, #9E9BF2 50%, transparent 50%)",
      border: "1px solid #9E9BF2",
    },
    {
      name: "MxWallet",
      detail:
        "Wallets not just allow you to send and receive digital currency but also monitor and manage your cryptocurrency assets. It can store one or multiple currencies at just one time. Its features offer a chance to level up cryptocurrency transactions.",
      link1: "",
      link2: "",
      img: "/assets/images/mh6.svg",
      btnc: "linear-gradient(to right, #BF9A78 50%, transparent 50%)",
      border: "1px solid #BF9A78",
    },
    {
      name: "MxBlock",
      detail:
        "Our experts have a knack for making end-users' life simple. With the help of MxBlock, physical assets can be converted into digital tokens and traded on exchanges through tokenization. and blockchain helps you manage ownership transfer efficiently.",
      link1: "",
      link2: "",
      img: "/assets/images/mh7.svg",
      btnc: "linear-gradient(to right, #4B99FF 50%, transparent 50%)",
      border: "1px solid #4B99FF",
    },
    {
      name: "MxNFT",
      detail:
        "A custom NFT ecosystem infused with cutting-edge technology and transparent accessibility allows creators, collectors, and dealers to benefit from liquid investments.",
      link1: "",
      link2: "",
      img: "/assets/images/nfti.png",
      btnc: "linear-gradient(to right, #D95276 50%, transparent 50%)",
      border: "1px solid #D95276",
    },
  ];
  return (
    <div
      className={styles.OurProductsContainer}
      style={{ position: targetd, top: "0" }}
    >
      <div
        className={styles.FollowerLight}
        style={{ left: xcord, top: ycord, opacity: opacitycord }}
      ></div>

      <div>
        <h3
          className={styles.OurProductsHeading}
          // data-aos="zoom-in"
          // data-aos-duration="2000"
        >
          Our Products
        </h3>
        <div className={styles.OurProductsCardsContainer}>
          <div
            className={styles.OurProductsCard}
            onMouseMove={(e) => {
              setXcord(e.pageX);
              setYcord(e.pageY);
              setOpacitycord("0.7");
            }}
            onMouseOut={() => setOpacitycord("0")}
            onMouseLeave={() => setOpacitycord("0")}
          >
            {/*  */}
            {/* {ProductsList.map((value, index) => ( */}

            <div className={`${styles.OurProductsCardsMain} fadeInRight`}>
              <div className={styles.OurProductsCardSub}>
                <div className={styles.OurProductsCardImage}>
                  <Image src={ProductsList[currentItem].img} />
                </div>
                <div className={styles.OurProductsCardDetail}>
                  <h4 className={styles.OurProductsHead}>
                    {ProductsList[currentItem].name}
                  </h4>
                  <p className={styles.OurProductsParagraph}>
                    {ProductsList[currentItem].detail}
                  </p>

                  <LearnMore
                    t1={<MdKeyboardArrowRight />}
                    t2={<MdKeyboardArrowRight />}
                  />
                </div>
                <div>
                  <div className={styles.BtnContainer}>
                    <ActionButtonV3
                      stylebtn={{
                        background: ProductsList[currentItem].btnc,
                        backgroundSize: "200% 100% !important",
                        backgroundPosition: "right bottom !important",
                        color: "#fff",
                        border: ProductsList[currentItem].border,
                        display: "block",
                      }}
                      text={
                        <>
                          Explore Product&nbsp;
                          <HiOutlineExternalLink />
                        </>
                      }
                    />
                    <div className={styles.RequestDemo1}>
                      <HiOutlineExternalLink />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
