import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/marcos-eduardo-camargo-7511bb21b/",
  },
  { name: "github", icon: <FaGithub />, link: "https://github.com/Marcosedu1" },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/marcoseddu_",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          target="_blank"
          className="social-btn"
          id={network.name}
          key={network.name}
          rel="noreferrer"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
