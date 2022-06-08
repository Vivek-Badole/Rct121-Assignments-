import styles from "./Contact.module.css";
import { useState } from "react";

function ContactCard(props) {
  const { img, name, email, phone, key } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.contact}>
      <div className={styles.img}>
        <img src={img} alt="images" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
        {isActive && <p>{phone}</p>}
      </div>
    </div>
  );
}
export default ContactCard;
