import { Col, Row } from "react-bootstrap"
import { HiOutlineExternalLink } from "react-icons/hi"
import ActionButton from "./ActionButton"
import styles from "@/styles/components/aboutus/Hero.module.css";
const MainTitle = ({ title, btntext, href }) => {
    return (
        <Row className={styles.SoftwareDevelopmentExpertsRow}>
            <Col xl={6} xs={8} md={6} className="p-0">
                <div className={styles.SoftwareDevelopmentExpertsSmallHead}>
                    <div className={styles.HomeMiniLine} />
                    <span className={styles.HomeSmallHeading}>
                        {title}
                    </span>
                </div>
            </Col>
            <Col
                xl={6}
                md={6}
                xs={4}
                className={styles.SoftwareDevelopmentExpertsBtnCol}
            >
                <ActionButton
                    href={href}
                    partialButton={styles.MobButton}
                    otherclass={styles.SpaceRemover}
                    text={
                        <>
                            <span className={styles.TextButton}>{btntext + " "}</span>
                            <HiOutlineExternalLink />
                        </>
                    }
                />
            </Col>
        </Row>
    )
}
export default MainTitle