import styles from "@/styles/components/home/Inspiredby.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import ActionButton from "../Common/ActionButton";

const CardInspired = ({
  style,
  srcimg,
  animtype,
  animdelay,
  inspireTitle,
  inspireParagraph,
  disTitle,
  dish1,
  dish2,
  disp1,
  disp2,
}) => {
  return (
    <div
      className={`${styles.InspiredCardcontainer} ${style}`}
      data-aos={animtype}
      data-aos-duration="1000"
      data-aos-delay={animdelay}
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      // data-aos-offset={animOf}
    >
      <Image src={srcimg} alt="Avatar" className={styles.InspiredCardImage} />
      <div className={styles.InspiredDis}>
        <p className={styles.InspiredDisTitle}>{inspireTitle}</p>
        <p className={styles.InspiredDisParagraph}>{inspireParagraph}</p>
      </div>
      <div className={styles.InspiredCardOverlay}>
        <div className={styles.InspiredCardText}>
          <p
            className={styles.InspiredDisTitle}
            style={{ paddingBottom: "1rem" }}
          >
            {disTitle}
          </p>
          <p className={styles.InspiredDishead1}>{dish1}</p>
          <div className={styles.Inspired}></div>
          <p className={styles.InspiredDisParagraph}>{disp1}</p>
          <p className={styles.InspiredDishead1}>{dish2}</p>
          <div className={styles.Inspired}></div>

          <p className={styles.InspiredDisParagraph}>{disp2}</p>
        </div>
      </div>
    </div>
  );
};
const Inspiredby = () => {
  const listOfInspired = [
    {
      iname: "Private Blockchain & Tokenization",
      img: "/assets/images/inspiration1.png",
      link: "",
    },
    {
      iname: "Private Blockchain & Tokenization",
      img: "/assets/images/inspiration2.png",
      link: "",
    },
    {
      iname: "Private Blockchain & Tokenization",
      img: "/assets/images/inspiration3.png",
      link: "",
    },
  ];
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.InspiredContainer}>
      <Row className={styles.InspiredCardRow}>
        {/* left */}
        <Col xl={5} xs={12} md={5} className={styles.InspiredCardCol}>
          <h3 className={styles.InspiredCardDesMob}>
            Get Inspired by Case Studies
          </h3>
          <div className={styles.LeftdivMain}>
            <CardInspired
              animtype={"fade-up"}
              srcimg={"/assets/images/CS1.png"}
              style={styles.InspiredCardSpace}
              inspireTitle={"EtherGo blockchain-based fundraising platform"}
              inspireParagraph={
                "In this case, the client wanted a blockchain-based fundraising platform that allows investors... "
              }
              disTitle={"EtherGo blockchain-based fundraising platform"}
              dish1={"Problem"}
              disp1={
                "In this case, the client wanted a blockchain-based fundraising platform that allows investors and start-ups to meet and create an ecosystem of transparency with native security tokens for fundraising."
              }
              dish2={"Solution"}
              disp2={
                "We provided a product with an EtherGo Blockchain-based Investor-Relationship dashboard. That has SEC Complaint ERC 700 series Security token also Reg D offering for Accredited investors."
              }
            />

            <CardInspired
              animtype={"fade-up"}
              srcimg={"/assets/images/CS2.png"}
              inspireTitle={
                "TRON Private Chain and Centralized Blockchain Ecosystem"
              }
              inspireParagraph={
                "A private blockchain network where all the gambling platforms can come and provide faster..."
              }
              disTitle={
                "TRON Private Chain and Centralized Blockchain Ecosystem"
              }
              dish1={"Problem"}
              disp1={
                "A private blockchain network where all the gambling platforms can come and provide faster settlements with no slippage and compel customers to respend the won amount also allows them to use the money for other services."
              }
              dish2={"Solution"}
              disp2={
                "We offered an HFT exchange for fiat and crypto trading with Tron-based private blockchain, in-house blockchain-based utility tokens, WebSocket-based open APIs for 3rd party platform plug-ins, and a vendor payment system for crypto processing."
              }
            />
            <div className={styles.InspiredCardView}>
              <p className={styles.Viewall}>View All</p>
              <Image
                alt={"grad"}
                src="/assets/images/grad.svg"
                className={styles.InspiredCardImg}
              />
            </div>
          </div>
        </Col>
        {/* right */}
        <Col xl={5} xs={12} md={5} className={styles.InspiredCardCol}>
          <h3 className={styles.InspiredCardDes}>
            Get Inspired by Case Studies
          </h3>
          <CardInspired
            animtype={"fade-up"}
            srcimg={"/assets/images/CS3.png"}
            style={styles.InspiredCardSpace}
            inspireTitle={
              "Public Ether Blockchain based Centralized Product Ecosystem"
            }
            inspireParagraph={
              "The client wanted a network-driven platform that integrates a network marketing platform..."
            }
            disTitle={
              "Public Ether Blockchain based Centralized Product Ecosystem"
            }
            dish1={"Problem"}
            disp1={
              "The client wanted a network-driven platform that integrates a network marketing platform, E-commerce, a wallet, and trading capabilities, allowing loyalty rewards and tracking systems over the blockchain."
            }
            dish2={"Solution"}
            disp2={
              "We provided a solution that facilitates centralized fiat and crypto exchange with leverage along with an Ether-based public blockchain, a utility token that works as a loyalty token, a EURO-based stable coin, and a single SSO system for a 6+ blockchain-based product."
            }
          />
          <CardInspired
            animtype={"fade-up"}
            srcimg={"/assets/images/case4.png"}
            inspireTitle={
              "HFT Derivatives Platform with Risk Engine and Custom Contracts"
            }
            inspireParagraph={
              "The client wanted an extremely scalable system with a highly supportive risk engine to support..."
            }
            disTitle={
              "HFT Derivatives Platform with Risk Engine and Custom Contracts"
            }
            dish1={"Problem"}
            disp1={
              "The client wanted an extremely scalable system with a highly supportive risk engine to support Derivatives products with underlying assets as the crypto to manage the Hedge fund of $1Bn."
            }
            dish2={"Solution"}
            disp2={
              "We offered a bitcoin-based derivative product with a trading system along with VaR-based Risk Engine and 100X leverage Engine."
            }
          />
          <div className={styles.InspiredCardView2}>
            <p className={styles.Viewall2}>View All</p>
            <Image
              alt="grad2"
              src="/assets/images/grad.svg"
              className={styles.InspiredCardImg2}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Inspiredby;
