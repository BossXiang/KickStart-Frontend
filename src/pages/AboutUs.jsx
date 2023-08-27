import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/AboutUs.scss";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="aboutUsContainer">
        <div className="about">
          <div className="aboutContent">
            <h2 className="aboutTitle">About Tailor Bliss</h2>
            <p className="aboutWords">Step into TailorBliss, where limitless personalization brings your unique vision to life. This realm transforms your ideas into exclusive, personalized experiences. At TailorBliss, we're dedicated to turning your imaginative concepts into realities.<br/><br/>
              Our journey is guided by a potent belief – every individual deserves products harmonizing with their identity. TailorBliss isn't just e-commerce; it's a dynamic canvas spotlighting your creativity.<br/><br/>
              Discover a shopping era empowered by you. TailorBliss shapes tailored fashion and expressive home decor, making your story tangible. Our intuitive platform bridges concept and creation with excitement.<br/><br/>
              Embrace personalization's essence with TailorBliss. Skilled artisans craft each detail, ensuring your unique perspective shines. Seek the perfect gift or embody your signature style with our curated customizable products.<br/><br/>
              Join a community celebrating individuality and creativity. TailorBliss transcends a destination; it's your exultation. Thanks for choosing TailorBliss to embrace your distinctiveness and savor bespoke delight.<br/><br/>
              Witness ordinary moments becoming extraordinary memories. Discover. Design. Delight. Welcome to the universe of TailorBliss.</p>
          </div>
        </div>

        <h2 className="contactUs">Contact Us</h2>

        <div className="container">
          <img src="assets/img/tom.jpg" alt="A face" />
          <div className="description">
            <p className="contactName">Tom</p>
            <p>Co-founder of TailorBliss</p>
            <span className="line">
              <p>Email:</p>
              <a href="mailto:tom@tailorbliss.com">tom@tailorbliss.com</a>
            </span>
            <span className="line">
              <p>Phone:</p>
              <a href="tel:123-456-7890">123-456-7890</a>
            </span>
          </div>
          <div className="description">
            <p className="contactName">Elijah</p>
            <p>Co-founder of TailorBliss</p>
            <span className="line">
              <p>Email:</p>
              <a href="mailto:haha@tailorbliss.com">haha@tailorbliss.com</a>
            </span>
            <span className="line">
              <p>Phone:</p>
              <a href="tel:123-456-7890">123-456-7890</a>
            </span>
          </div>
          <img src="assets/img/elijah.jpg" alt="A face" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
