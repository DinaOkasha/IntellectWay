import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Social({ title }) {
  return (
    <>
      <div className="socialTitle">
        <h3>{title}</h3>
      </div>
      <div className="socialIcons">
        <FontAwesomeIcon className="socialIcon" icon={faXTwitter} />
        <FontAwesomeIcon className="socialIcon" icon={faFacebook} />
        <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
        <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
      </div>
    </>
  );
}
