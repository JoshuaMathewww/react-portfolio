import { CONTACT } from "../constants";
import { AniHighlight } from "../components/Hero.jsx";

const ContactSection = () => {
  return (
    <section id="contact" className="pb-20 flex flex-col items-center justify-center" >
    <AniHighlight>
    <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
    </AniHighlight>
      <div className="text-center tracking-tighter">
      <AniHighlight>
      <p className="my-4">{CONTACT.address}</p>
      </AniHighlight>
      <AniHighlight>
      <p className="my-4">{CONTACT.phoneNo}</p>
      </AniHighlight>
      <AniHighlight>
      <a href="mailto:joshuamathewww@gmail.com" target="_blank">{CONTACT.email}</a>
      </AniHighlight>
      </div>
    </section>
  );
};

export default ContactSection;
