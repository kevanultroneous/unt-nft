import { Col, Row } from "react-bootstrap";
import styles from "@/styles/components/Products/Trade.module.css"
import { HiOutlineExternalLink } from "react-icons/hi";
export default function Trade({ firstcolor = "#363637", secondcolor = "#79797a", thirdcolor = "#bcbcbc" }) {
    return (
        <Row className={styles.NextRow}>
            <Col xl={12} className={styles.ColOne}
            >
                <div className={"d-flex align-items-center justify-content-center"}>

                    <div className={styles.outer}>
                        <div className={styles.bg}
                            style={{
                                background: `-moz-linear-gradient(90deg, ${firstcolor} 0%, ${secondcolor} 50%, ${thirdcolor} 100%)`,
                                background: `-webkit-gradient(linear,90deg top,right top,
                                color-stop(0%, ${firstcolor}),
                                color-stop(50%, ${secondcolor}),
                                color-stop(100%, ${thirdcolor}))`,
                                background: `-webkit-linear-gradient(90deg, ${firstcolor} 0%, ${secondcolor} 50%, ${thirdcolor} 100%)`,
                                background: `-o-linear-gradient(90deg, ${firstcolor} 0 %, ${secondcolor} 50 %, ${thirdcolor} 100 %)`,
                                background: `-ms-linear-gradient(90deg, ${firstcolor} 0 %, ${secondcolor} 50 %, ${thirdcolor} 100 %)`,
                                background: `linear-gradient(90deg, ${firstcolor} 0%, ${secondcolor} 50%, ${thirdcolor} 100%)`,
                            }}
                        >
                            <div className={styles.inner}>
                                <h1 className={styles.h1}>Trade</h1>
                            </div>

                        </div>

                    </div>
                    <span>
                        <HiOutlineExternalLink
                            className={styles.ContactusIcon}
                            style={{ color: firstcolor, fontSize: "4rem" }}
                        />
                    </span>
                </div>

                <p
                    className={styles.ExchnageParagraph}
                    style={{ color: firstcolor }}
                >
                    Get a free demo to dive in the crypto world with a smart exchange
                    platform.
                </p>
            </Col>
        </Row>
    )
}