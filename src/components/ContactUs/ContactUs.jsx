import "./contactus.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
export default function ContactUs() {
  return (
    <>
      <div className="contactContainer">
        <div className="contactUpper">
          <h1>Contact Us</h1>
        </div>
        <div className="contactLower">
          <div className="contactinfo">
            <ContactInfo />
          </div>
          <div className="contactForm">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
