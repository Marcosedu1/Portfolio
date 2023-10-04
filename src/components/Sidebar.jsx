import Avatar from "../img/foto.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Marcos Eduardo" />
      <p className="title">Desenvolvedor WEB</p>
      <SocialNetworks />
      <InformationContainer />
    </aside>
  );
};

export default Sidebar;
