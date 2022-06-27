import { Alert, Col, Image, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
// import styles from "@/styles/components/home/Products.module.css";
import styles from "@/styles/components/home/Products.module.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import ActionButtonV3 from "../Common/ActionButtonV3";
import ActionButton from "../Common/ActionButton";
const Products = ({ targetposition }) => {
  const [opacity, setOpacity] = useState(0);
  const [xcord, setXcord] = useState(0);
  const [ycord, setYcord] = useState(0);
  const [opacitycord, setOpacitycord] = useState("0");
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const ProductsList = [
    {
      num: "01",
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
      num: "02",
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
      num: "03",
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
      num: "04",
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
      num: "05",
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
      num: "06",
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
      num: "07",
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
      num: "08",
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
    <div className={styles.SectionCards} data-anim-scroll-group="cards">
      <div
        className={styles.SectionContent}
        onMouseMove={(e) => {
          setXcord(e.pageX);
          setYcord(e.pageY);
          setOpacitycord("0.7");
        }}
        onMouseOut={() => setOpacitycord("0")}
        onMouseLeave={() => setOpacitycord("0")}
      >
        <h3 className={styles.OurProductsHeading}>Our Products</h3>
        <div className={styles.CardsSwrapper}>
          <div
            className={styles.FollowerLight}
            style={{ left: xcord, top: ycord, opacity: opacitycord }}
          />
          <ul>
            <li
              className={styles.card01}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[0].num}</span>
              </div>

              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} className={styles.ProductImages}>
                    <Image src={ProductsList[0].img} />
                  </Col>
                  <Col xl={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[0].name}</h4>
                      <p>{ProductsList[0].detail}</p>
                      <p style={{ color: ProductsList[0].color }}>
                        {ProductsList[0].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[0].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[0].tags}</p>
                      <ActionButtonV3
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[0].btnc}
                        borderc={ProductsList[0].border}
                      />
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card02}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[1].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} className="text-end">
                    <Image src={ProductsList[1].img} />
                  </Col>
                  <Col xl={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[1].name}</h4>
                      <p>{ProductsList[1].detail}</p>
                      <p style={{ color: ProductsList[1].color }}>
                        {ProductsList[1].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[1].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[1].tags}</p>
                      <ActionButtonV3
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[1].btnc}
                        borderc={ProductsList[1].border}
                      />
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card03}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[2].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} className="text-end">
                    <Image src={ProductsList[2].img} />
                  </Col>
                  <Col xl={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[2].name}</h4>
                      <p>{ProductsList[2].detail}</p>
                      <p style={{ color: ProductsList[2].color }}>
                        {ProductsList[2].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[2].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[2].tags}</p>
                      <ActionButtonV3
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[2].btnc}
                        borderc={ProductsList[2].border}
                      />
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card04}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[3].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} className="text-end">
                    <Image src={ProductsList[3].img} />
                  </Col>
                  <Col xl={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[3].name}</h4>
                      <p>{ProductsList[3].detail}</p>
                      <p style={{ color: ProductsList[3].color }}>
                        {ProductsList[3].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[3].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[3].tags}</p>
                      <ActionButtonV3
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[3].btnc}
                        borderc={ProductsList[3].border}
                      />
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card05}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[4].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} className="text-end">
                    <Image src={ProductsList[4].img} />
                  </Col>
                  <Col xl={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[4].name}</h4>
                      <p>{ProductsList[4].detail}</p>
                      <p style={{ color: ProductsList[4].color }}>
                        {ProductsList[4].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[4].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[4].tags}</p>
                      <ActionButtonV3
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[4].btnc}
                        borderc={ProductsList[4].border}
                      />
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card06}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[5].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} className="text-end">
                    <Image src={ProductsList[5].img} />
                  </Col>
                  <Col xl={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[5].name}</h4>
                      <p>{ProductsList[5].detail}</p>
                      <p style={{ color: ProductsList[5].color }}>
                        {ProductsList[5].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[5].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[5].tags}</p>
                      <ActionButtonV3
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[5].btnc}
                        borderc={ProductsList[5].border}
                      />
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={styles.card07}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[6].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} className="text-end">
                    <Image src={ProductsList[6].img} />
                  </Col>
                  <Col xl={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[6].name}</h4>
                      <p>{ProductsList[6].detail}</p>
                      <p style={{ color: ProductsList[6].color }}>
                        {ProductsList[6].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[6].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[6].tags}</p>
                      <ActionButtonV3
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[6].btnc}
                        borderc={ProductsList[6].border}
                      />
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
            <li
              className={`${styles.card08} last-card`}
              onMouseOver={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            >
              <div className={styles.HRcontainer}>
                <hr
                  className={styles.HrBorder}
                  style={{ color: "#fff", width: "30%" }}
                />
                <span>{ProductsList[7].num}</span>
              </div>
              <figure className={styles.CardContainer}>
                <Row className="m-0 p-0">
                  <Col xl={6} className="text-end">
                    <Image src={ProductsList[7].img} />
                  </Col>
                  <Col xl={6} className={styles.Carddetail}>
                    <div className={styles.ProductDetails}>
                      <h4>{ProductsList[7].name}</h4>
                      <p>{ProductsList[7].detail}</p>
                      <p style={{ color: ProductsList[7].color }}>
                        {ProductsList[7].highlight}
                      </p>
                      <p className={styles.question}>
                        {ProductsList[7].question}
                      </p>
                      <p className={styles.tags}>{ProductsList[7].tags}</p>
                      <ActionButtonV3
                        opacity={opacity}
                        text={
                          <>
                            Explore Product&nbsp;&nbsp;&nbsp;
                            <HiOutlineExternalLink />
                          </>
                        }
                        backc={ProductsList[7].btnc}
                        borderc={ProductsList[7].border}
                      />
                    </div>
                  </Col>
                </Row>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Products;
{
  /* <div className={styles.OurProductsContainer} style={targetposition}> */
}
{
  /* <div
      className={styles.FollowerLight}
      style={{ left: xcord, top: ycord, opacity: opacitycord }}
    ></div> */
}

{
  /* <div> */
}
{
  /* <h3
            className={`${styles.OurProductsHeading}`}
            data-aos="zoom-in"
            data-aos-duration="2000"
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
              } }
              onMouseOut={() => setOpacitycord("0")}
              onMouseLeave={() => setOpacitycord("0")}
            > */
}
{
  /*  */
}
{
  /* {ProductsList.map((value, index) => (
                
              ))} */
}
{
  /* </div>
          </div>
        </div> */
}
// </div>
