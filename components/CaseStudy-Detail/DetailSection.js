import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/CaseStudy-Detail/DetailSectionWrraper.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function DetailSection() {
  const [CurrentTab, setCurrentTab] = useState(0);
  const TabList = [
    { name: "About the Client", link: "#about-the-client" },
    { name: "Business", link: "#business" },
    { name: "Solution", link: "#solution" },
    { name: "Result", link: "#result" },
  ];

  return (
    <Row className={styles.DetailSectionWrraper}>
      <Col xl={2} lg={2}>
        <div className={styles.TabWrraper}>
          {TabList.map((value, index) => (
            <Link href={value.link} key={index}>
              <div
                className={`${
                  index === CurrentTab
                    ? styles.TabSelectedContainer
                    : styles.TabContainer
                }`}
                onClick={() => setCurrentTab(index)}
              >
                <span></span>
                {value.name}
              </div>
            </Link>
          ))}
        </div>
      </Col>
      <Col xl={10} lg={10}>
        <div className={styles.DetailWrraper} id="about-the-client">
          <h4 className={styles.HeadingOfDetails}>About the Client</h4>
          <div className={styles.ParagraphWrraper}>
            <p className={styles.ParagraphOfDetails}>
              For closing the books swiftly, finance requires an ERP. For
              managing all customer orders, sales need an ERP system. For
              delivering the proper products and services to clients on time,
              logistics rely on well-running ERP software. ERP is required by
              accounts payable to pay suppliers appropriately and on time. To
              make quick decisions, management requires instant access to the
              company’s performance. Banks and stockholders, meanwhile, want
              accurate financial records, so they rely on the ERP system’s
              dependable data and analysis. For closing the books swiftly,
              finance requires an ERP. For managing all customer orders, sales
              need an ERP system. For delivering the proper products and
              services to clients on time, logistics rely on well-running ERP
              software. ERP is required by accounts payable to pay suppliers
              appropriately and on time. For managing all customer orders, sales
              need an ERP system. For delivering the proper products and
              services to clients on time, logistics rely on well-running ERP
              software. ERP is required by accounts payable to pay suppliers
              appropriately and on time.
            </p>
            <p className={styles.ParagraphOfDetails}>
              For closing the books swiftly, finance requires an ERP. For
              managing all customer orders, sales need an ERP system. For
              delivering the proper products and services to clients on time,
              logistics rely on well-running ERP software. ERP is required by
              accounts payable to pay suppliers appropriately and on time. To
              make quick decisions, management requires instant access to the
              company’s performance. Banks and stockholders, meanwhile, want
              accurate financial records, so they rely on the ERP system’s
              dependable data and analysis. For closing the books swiftly,
              finance requires an ERP.
            </p>
          </div>
        </div>
        <div className={styles.DetailWrraper} id="business">
          <h4 className={styles.HeadingOfDetails}>Business Challenge</h4>
          <div className={styles.ParagraphWrraper}>
            <p className={styles.ParagraphOfDetails}>
              For closing the books swiftly, finance requires an ERP. For
              managing all customer orders, sales need an ERP system. For
              delivering the proper products and services to clients on time,
              logistics rely on well-running ERP software. ERP is required by
              accounts payable to pay suppliers appropriately and on time. To
              make quick decisions, management requires instant access to the
              company’s performance. Banks and stockholders, meanwhile, want
              accurate financial records, so they rely on the ERP system’s
              dependable data and analysis. For closing the books swiftly,
              finance requires an ERP. For managing all customer orders, sales
              need an ERP system. For delivering the proper products and
              services to clients on time, logistics rely on well-running ERP
              software. ERP is required by accounts payable to pay suppliers
              appropriately and on time. For managing all customer orders, sales
              need an ERP system. For delivering the proper products and
              services to clients on time, logistics rely on well-running ERP
              software. ERP is required by accounts payable to pay suppliers
              appropriately and on time.
            </p>
          </div>
        </div>
        <div className={styles.DetailWrraper} id="solution">
          <h4 className={styles.HeadingOfDetails}>Solution</h4>
          <div className={styles.ParagraphWrraper}>
            <p className={styles.ParagraphOfDetails}>
              For closing the books swiftly, finance requires an ERP. For
              managing all customer orders, sales need an ERP system. For
              delivering the proper products and services to clients on time,
              logistics rely on well-running ERP software. ERP is required by
              accounts payable to pay suppliers appropriately and on time. To
              make quick decisions, management requires instant access to the
              company’s performance. Banks and stockholders, meanwhile, want
              accurate financial records, so they rely on the ERP system’s
              dependable data and analysis. For closing the books swiftly,
              finance requires an ERP. For managing all customer orders, sales
              need an ERP system. For delivering the proper products and
              services to clients on time, logistics rely on well-running ERP
              software. ERP is required by accounts payable to pay suppliers
              appropriately and on time. For managing all customer orders, sales
              need an ERP system. For delivering the proper products and
              services to clients on time, logistics rely on well-running ERP
              software. ERP is required by accounts payable to pay suppliers
              appropriately and on time.
            </p>
            <div className={styles.SolutionImage}>
              <Image src="/assets/images/solution-img.png" fluid />
            </div>
          </div>
        </div>
        <div className={styles.DetailWrraper} id="result">
          <h4 className={styles.HeadingOfDetails}>Result</h4>
          <div className={styles.ParagraphWrraper}>
            <p className={styles.ParagraphOfDetails}>
              For closing the books swiftly, finance requires an ERP. For
              managing all customer orders, sales need an ERP system. For
              delivering the proper products and services to clients on time,
              logistics rely on well-running ERP software. ERP is required by
              accounts payable to pay suppliers appropriately and on time. To
              make quick decisions, management requires instant access to the
              company’s performance. Banks and stockholders, meanwhile, want
              accurate financial records, so they rely on the ERP system’s
              dependable data and analysis. For closing the books swiftly,
              finance requires an ERP. For managing all customer orders, sales
              need an ERP system. For delivering the proper products and
              services to clients on time, logistics rely on well-running ERP
              software. ERP is required by accounts payable to pay suppliers
              appropriately and on time. For managing all customer orders, sales
              need an ERP system. For delivering the proper products and
              services to clients on time, logistics rely on well-running ERP
              software. ERP is required by accounts payable to pay suppliers
              appropriately and on time.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}
