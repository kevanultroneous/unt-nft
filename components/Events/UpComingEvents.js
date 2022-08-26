import React, { useEffect } from "react";
import ActionButtonV2 from "../Common/ActionButtonV2";
import { Col, Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/components/Events/UpComingEvents.module.css";
import Aos from "aos";

export function UpComingEvents({
  date,
  monthAndYear,
  DescHeading,
  DescPara,
  LinkTo,
}) {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <Row
      className={styles.UpComingEventsRow}
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <Col
        xl={2}
        md={2}
        sm={2}
        className={(styles.alignItemsCenter, styles.upcomingEventDate)}
      >
        <h4>{date}</h4>
        <p>{monthAndYear}</p>
      </Col>
      <Col
        xl={8}
        md={8}
        sm={8}
        className={(styles.alignItemsCenter, styles.upcomingEventDesc)}
      >
        <h6>{DescHeading}</h6>
        <p>{DescPara}</p>
      </Col>
      <Col
        xl={2}
        md={2}
        sm={2}
        className={(styles.alignItemsCenter, styles.upComingEventButton)}
      >
        <ActionButtonV2
          href={LinkTo}
          partialstyle={styles.UpComingEventsRegisterButton}
          text={
            <>
              <span>Register</span>
              <HiOutlineExternalLink />
            </>
          }
        />
      </Col>
    </Row>
  );
}

export function UpComingEventsMobile({
  date,
  monthAndYear,
  DescHeading,
  DescPara,
  LinkTo,
}) {
  return (
    <Row
      className={styles.UpComingEventsRow}
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <Row className={styles.dateAndButtonRow}>
        <Col
          xs={6}
          className={(styles.alignItemsCenter, styles.upcomingEventDate)}
        >
          <h4>{date}</h4>
          <p>{monthAndYear}</p>
        </Col>
        <Col
          xs={6}
          className={(styles.alignItemsCenter, styles.upComingEventButton)}
        >
          <ActionButtonV2
            href={LinkTo}
            partialstyle={styles.UpComingEventsRegisterButton}
            text={
              <>
                <span>Register</span>
                <HiOutlineExternalLink />
              </>
            }
          />
        </Col>
      </Row>
      <Col
        xs={12}
        className={(styles.alignItemsCenter, styles.upcomingEventDesc)}
      >
        <h6>{DescHeading}</h6>
        <p>{DescPara}</p>
      </Col>
    </Row>
  );
}
