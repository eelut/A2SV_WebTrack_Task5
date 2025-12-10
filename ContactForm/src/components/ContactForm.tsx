import "../styles/ContactForm.css";


const ContactForm = () => {
  return (
    <div>
      <section className="contactSection">
        <div className="glow"></div>
        <div className="content">
          <p className="title">Get in touch with us</p>
          <p className="subtitle">
            Please fill out the form below to share your information and we'll
            respond as soon as possible
          </p>
          <div className="formCard">
          <form action="">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter your name"
            />
            
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter your email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows={5}
            />
            <button type="submit" className="submitBtn">Submit</button>
          </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
