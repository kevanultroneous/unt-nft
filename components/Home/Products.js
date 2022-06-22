import { Alert, Image } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/components/home/Products.module.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import LearnMore from "../Common/LearnMore";
import { MdKeyboardArrowRight } from "react-icons/md";
import ActionButtonV3 from "../Common/ActionButtonV3";
const Products = ({ targetposition }) => {
  const [xcord, setXcord] = useState(0);
  const [ycord, setYcord] = useState(0);
  const [opacitycord, setOpacitycord] = useState("0");
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
  const mouseHandler = () => {
    var findProduct = document.getElementsByClassName(
      styles.OurProductsContainer
    )[0];
    var targetSection = findProduct.getBoundingClientRect();

    if (targetSection.y <= 0) {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = winScroll / height;
      const per = scrolled * 100;

      upper(per);
      lower(per);
    }
  };
  useEffect(() => {
    if (currentItem === 7) {
      window.removeEventListener("scroll", mouseHandler());
      var findProduct = document.getElementsByClassName(
        styles.OurProductsContainer
      )[0];
    }
  }, [currentItem]);
  useEffect(() => {
    AOS.refresh();
    AOS.init();
    window.addEventListener("scroll", () => mouseHandler());
  }, []);
  const ProductsList = [
    {
      name: "MxTrade",
      detail:
        "This is a centralized crypto trading terminal with 350+ feature-rich back office panels where a variety of methods are owned by the admin. It allows to settle trades between peers using a central order book for utility tokens, reward tokens, and security tokens to ensure seamless transactions.",
      link1: "",
      link2: "",
      img: "/assets/images/mh1.svg",
      btnc: "linear-gradient(to right, #F27E63 50%, transparent 50%)",
      border: "1px solid #F27E63",
      color: "#F27E63",
      highlight: "USP:- Dynamic Scaling Engines",
      question: "Who can benefit?",
      tags: "New coin owners | Banks | Exchanges | Traders | FX Brokers | Community Marketers ",
    },
    {
      name: "MxFuture",
      detail:
        "Open up new investment avenues with a leverage-based centralized trading environment designed for institutional traders and high-risk appetite retail audiences. It has features such as 100x spot leverage trade, perpetual swaps, inverse futures, American options, and European options.",
      link1: "",
      link2: "",
      img: "/assets/images/MF.png",
      btnc: "linear-gradient(to right, #00ACD7 50%, transparent 50%)",
      border: "1px solid #00ACD7",
      highlight: "USP: VaR (Value at Risk) based Risk Engines",
      question: "Who can benefit?",
      tags: "Institutional traders | Hedge funds | Family office | Banks | Tier 2-3 exchanges | Forex platform owners",
      color: "#00ACD7",
    },
    {
      name: "MxDex",
      detail:
        "A complete blockchain-driven trading platform with smart contracts matches direct peers and settles orders on the blockchain for utility tokens and DeFi tokens without involving third parties and institutionalized control. With features such as 9 Blockchain support, a Blockchain bridge, and an inbuilt liquidity pool for optimal user experience.",
      link1: "",
      link2: "",
      img: "/assets/images/mh3.svg",
      btnc: "linear-gradient(to right, #F2AB27 50%, transparent 50%)",
      border: "1px solid #F2AB27",
      highlight: "USP: Highly Scalable, Modular and Secure Implementations ",
      question: "Who can benefit?",
      tags: "Coin Owners | DAOs (Decentralized autonomous organizations) | DeFi Projects",
      color: "#F2AB27",
    },
    {
      name: "MxFi",
      detail:
        "Creating a digital ecosystem of decentralized finance using decentralized blockchain networks for lending, stacking, borrowing, lotteries, farming, etc. Additionally, it supports all smart contracts and private EVM chains to deliver a wide array of services without fraudulent activities.",
      link1: "",
      link2: "",
      img: "/assets/images/mh4.svg",
      btnc: "linear-gradient(to right, #4BA6A6 50%, transparent 50%)",
      border: "1px solid #4BA6A6",
      highlight: "USP: Transparency of Transactions",
      question: "Who can benefit?",
      tags: "Coin Owners | DAOs (Decentralized autonomous organizations) | DeFi Projects",
      color: "#4BA6A6",
    },
    {
      name: "MxLaunch",
      detail:
        "An all blockchain-supported fundraising platform for Utility, DeFi, Security, and NFT Tokens with various models like IEO, IDO, IGO, and STOs. Boost crowdfunding opportunities with customized centralized and decentralized fundraising dashboards and a bonus and discount setup.",
      link1: "",
      link2: "",
      img: "/assets/images/mh5.svg",
      btnc: "linear-gradient(to right, #9E9BF2 50%, transparent 50%)",
      border: "1px solid #9E9BF2",
      highlight: "USP: A KYC/AML Compliant Dashboard",
      question: "Who can benefit?",
      tags: "New coin owners | Exchanges | FX brokers | Banks | Traders | Community marketers | DAO | DeFi Projects | VC firms",
      color: "#9E9BF2",
    },
    {
      name: "MxWallet",
      detail:
        "Based on a modular architecture setup, its use case includes a hot multi-sig centralized wallet and an all blockchain-compatible decentralized wallet. Enables users to Hold, Swap, and Invest in their favorite utility, DeFi, or reward tokens with payment gateway integration.",
      link1: "",
      link2: "",
      img: "/assets/images/mh6.svg",
      btnc: "linear-gradient(to right, #BF9A78 50%, transparent 50%)",
      border: "1px solid #BF9A78",
      highlight: "USP: 180+ crypto support",
      question: "Who can benefit?",
      tags: "New coin owners | Exchanges | FX brokers | Banks | Traders | Community marketers | DAO | DeFi Projects | VC firms",
      color: "#BF9A78",
    },
    {
      name: "MxBlock",
      detail:
        "A customized Layer 1 and Layer 2 blockchain use case designed for specific niche needs and tokenizes any asset over the private network of setup blockchain. For professional investors, the Blockchain Consensus setup and enhanced layered security facilitate efficient transactions.",
      link1: "",
      link2: "",
      img: "/assets/images/mh7.svg",
      btnc: "linear-gradient(to right, #4B99FF 50%, transparent 50%)",
      border: "1px solid #4B99FF",
      highlight: "USP: Private Blockchain and Consensus Modeling",
      question: "Who can benefit?",
      tags: "New coin owners | FX brokers | Traders | Community marketers | DAO | DeFi Projects | VC firms",
      color: "#4B99FF",
    },
    {
      name: "MxNFT",
      detail:
        "An all blockchain compatible NFT suite infused with cutting-edge technology for the creation, auction, and trading of all non-fungible tokens within a single platform over any EVM public chain or private chain allows creators, collectors, and dealers to benefit from liquid investments. This complete 8+ use case implemented template saves you from unnecessary development time and cost.",
      link1: "",
      link2: "",
      img: "/assets/images/nfti.png",
      btnc: "linear-gradient(to right, #D95276 50%, transparent 50%)",
      border: "1px solid #D95276",
      highlight: "USP: Enterprise Ready with full Suit Customizations",
      question: "Who can benefit?",
      tags: "Artist group | Cultural importance organizations  | Sports franchise owners | FMCG brands",
      color: "#D95276",
    },
  ];
  return (
    <div className={styles.OurProductsContainer} style={targetposition}>
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
                  <p
                    className={styles.highlight}
                    style={{ color: ProductsList[currentItem].color }}
                  >
                    {ProductsList[currentItem].highlight}
                  </p>
                  <p className={styles.question}>
                    {ProductsList[currentItem].question}
                  </p>
                  <p className={styles.tags}>
                    {ProductsList[currentItem].tags}
                  </p>
                  <div>
                    <div className={styles.BtnContainer}>
                      <ActionButtonV3
                        backc={ProductsList[currentItem].btnc}
                        borderc={ProductsList[currentItem].border}
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
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
