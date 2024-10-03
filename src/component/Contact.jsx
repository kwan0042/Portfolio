import { Contact_Details } from "../content";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Contact Me</h1>

      <div className="text-center tracking-tighter">
        <p className="my-4">{Contact_Details.phoneNum}</p>
        <a className="border-b" href="#">
          {Contact_Details.email}
        </a>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/danielxkwan/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/kwan0042">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/daniel_kwan">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
