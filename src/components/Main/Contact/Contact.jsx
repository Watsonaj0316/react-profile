import React from "react";
import styles from "./Contact.module.css";
import styleIcon from "../../Common/LinkIcon.module.css";
import { LinkIcon } from "../../Common/LinkIcon";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { contact as contactData } from "../../../assets/data/contact";
import contactImage from "../../../../src/IMG_123.jpg";
// Import your image file

export const Contact = () => {
  const { linkedin, github, email } = contactData;

  return (
    <section className={styles.contact}>
      <h1>Contact</h1>
      <section className={styles.container}>
        <section>
          <section className={styles.info}>
            <section>
              <LinkIcon
                href={linkedin}
                icon={faLinkedin}
                style={styleIcon.large}
              />
              <LinkIcon href={github} icon={faGithub} style={styleIcon.large} />
            </section>
            <p>
              <b>Email:</b> {email}
            </p>
          </section>
        </section>
        <section>
          <img src={contactImage} alt="Contact" />
          <p>{contactImage}</p>
        </section>
      </section>
    </section>
  );
};
