import React from "react";
import ActionButtonV2 from "../Common/ActionButtonV2";
import { Col, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/components/Events/UpComingEvents.module.css";

function UpComingEvents({ date, monthAndYear, DescHeading, DescPara, LinkTo }) {
  return (
    <Row className={styles.UpComingEventsRow}>
      <Col
        xl={2}
        className={(styles.alignItemsCenter, styles.upcomingEventDate)}
      >
        <h4>{date}</h4>
        <p>{monthAndYear}</p>
      </Col>
      <Col
        xl={8}
        className={(styles.alignItemsCenter, styles.upcomingEventDesc)}
      >
        <h6>{DescHeading}</h6>
        <p>{DescPara}</p>
      </Col>
      <Col
        xl={2}
        className={(styles.alignItemsCenter, styles.upComingEventButton)}
      >
        <ActionButtonV2
          href={LinkTo}
          partialstyle={styles.UpComingEventsRegisterButton}
          text={
            <>
              <span
              //   className={styles.TextBtn}
              >
                Register
              </span>
              <HiOutlineExternalLink />
            </>
          }
        />
      </Col>
    </Row>
  );
}

export default UpComingEvents;
