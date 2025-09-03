export default function ContactForm() {
  return (
    <>
      <div className="formContainer">
        <div className="formTitle">
          <h3>Get in Touch with Us</h3>
        </div>
        <div className="FormData">
          <form>
            <div className="section">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="section">
              {" "}
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                required
              />
            </div>

            <div className="section">
              {" "}
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
            <fieldset className="section radioForm">
              <legend>Inquiry Type</legend>
              <div className="labelRadio">
                <label className="radio">
                  <input
                    type="radio"
                    name="inquiryType"
                    value="student"
                    required
                  />

                  <span>Student</span>
                </label>
                <label className="radio">
                  <input type="radio" name="inquiryType" value="professional" />

                  <span>Professional</span>
                </label>
                <label className="radio">
                  <input type="radio" name="inquiryType" value="institutes" />

                  <span>Institutes</span>
                </label>
              </div>
            </fieldset>

            <div className="section2">
              {" "}
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={4}
              ></textarea>
            </div>
            <div className="sectionbtn">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
