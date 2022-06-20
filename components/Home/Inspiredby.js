import styles from "@/styles/components/home/Inspiredby.module.css";
import AOS from "aos";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import ActionButton from "../Common/ActionButton";
import LearnMore from "../Common/LearnMore";
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
          {/* <p>
            Learn More{" "}
            <MdKeyboardArrowRight
              style={{
                background: "#fff",
                color: "#a21d34",
                borderRadius: "100%",
              }}
            />
          </p> */}
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
        <Col xl={5} xs={12} md={6} className={styles.InspiredCardCol}>
          <h3 className={styles.InspiredCardDesMob}>
            Get Inspired by Case Studies
          </h3>
          <CardInspired
            animtype={"fade-up"}
            srcimg={"/assets/images/inspiration1.png"}
            style={styles.InspiredCardSpace}
            inspireTitle={"A blockchain-based fundraising platform"}
            inspireParagraph={
              "In this case, the client wanted a blockchain-based fundraising platform that allows investors"
            }
            disTitle={"A blockchain-based fundraising platform"}
            dish1={"Problem"}
            disp1={
              "In this case, the client wanted a blockchain-based fundraising platform that allows investors and start-ups to meet and create an ecosystem of transparency with native security tokens for fundraising. "
            }
            dish2={"Solution"}
            disp2={
              "We provided a product with an EtherGo Blockchain-based Investor-Relationship dashboard. That has SEC Complaint ERC 700 series Security token also Reg D offering for Accredited investors."
            }
          />

          <CardInspired
            animtype={"fade-up"}
            srcimg={"/assets/images/inspiration3.png"}
            inspireTitle={
              "A network-driven platform integrating e-commerce, a wallet, and trading features"
            }
            inspireParagraph={"An ecosystem where all the gambling platforms"}
            disTitle={
              "A network-driven platform integrating e-commerce, a wallet, and trading features"
            }
            dish1={"Problem"}
            disp1={
              "The client wanted a network-driven platform that integrates a network marketing platform, E-commerce, a wallet, and trading capabilities, allowing loyalty rewards and tracking systems over the blockchain. "
            }
            dish2={"Solution"}
            disp2={
              "We provided a solution that facilitates centralized fiat and crypto exchange with leverage along with an Ether-based public blockchain, a utility token that works as a loyalty token, a EURO-based stable coin, and a single SSO system for a 6+ blockchain-based product."
            }
          />
          <div className={styles.InspiredCardView}>
            <p className={styles.Viewall}>View All</p>
            <Image
              src="/assets/images/grad.svg"
              className={styles.InspiredCardImg}
            />
          </div>
        </Col>
        {/* right */}
        <Col xl={5} xs={12} md={6}>
          <h3 className={styles.InspiredCardDes}>
            Get Inspired by Case Studies
          </h3>
          <CardInspired
            animtype={"fade-up"}
            srcimg={"/assets/images/inspiration2.png"}
            style={styles.InspiredCardSpace}
            inspireTitle={
              "A highly scalable trading system with a VaR-based risk engine for Bitcoin-based derivatives"
            }
            inspireParagraph={""}
            disTitle={
              "A highly scalable trading system with a VaR-based risk engine for Bitcoin-based derivatives"
            }
            dish1={"Problem"}
            disp1={
              "The client wanted an extremely scalable system with a highly supportive risk engine to support Derivatives products with underlying assets as the crypto to manage the Hedge fund of $1Bn."
            }
            dish2={"Solution"}
            disp2={
              "We offered a bitcoin-based derivative product with a trading system with VaR-based Risk Engine and 100X leverage Engine."
            }
          />
          <CardInspired
            animtype={"fade-up"}
            srcimg={"/assets/images/insp4.png"}
            inspireTitle={"A blockchain-based fundraising platform"}
            inspireParagraph={
              "In this case, the client wanted a blockchain-based fundraising platform that allows investors"
            }
            disTitle={"A blockchain-based fundraising platform"}
            dish1={"Problem"}
            disp1={
              "In this case, the client wanted a blockchain-based fundraising platform that allows investors and start-ups to meet and create an ecosystem of transparency with native security tokens for fundraising. "
            }
            dish2={"Solution"}
            disp2={
              "We provided a product with an EtherGo Blockchain-based Investor-Relationship dashboard. That has SEC Complaint ERC 700 series Security token also Reg D offering for Accredited investors."
            }
          />
          <div className={styles.InspiredCardView2}>
            <p className={styles.Viewall2}>View All</p>
            <Image
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
