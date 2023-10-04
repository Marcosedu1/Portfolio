import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMsqlServer,
  DiReact,
  DiJava,
  DiDotnet,
  DiPhp,
} from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    description:
      "Estruturação eficiente do conteúdo fundamental para o desenvolvimento web.",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    description:
      "Estilização avançada, layouts flexíveis (Flexbox), e domínio de frameworks como React.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description:
      "Programação interativa para páginas web dinâmicas e experiências de usuário.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    description:
      "Desenvolvimento no lado do servidor com eficiência e escalabilidade em JavaScript.",
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    description:
      "Extensão do JavaScript para código robusto com tipagem estática opcional.",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description:
      "Construção de interfaces interativas e reativas em aplicações web modernas.",
  },
  {
    id: "php",
    name: "PHP",
    icon: <DiPhp />,
    description:
      "Linguagem para desenvolvimento de aplicações web dinâmicas e funcionais.",
  },
  {
    id: "sqlserver",
    name: "SQL Server",
    icon: <DiMsqlServer />,
    description:
      "Gestão eficiente de bancos de dados para integridade e recuperação de dados.",
  },
  {
    id: "java",
    name: "Java",
    icon: <DiJava />,
    description:
      "Linguagem versátil para desenvolvimento de software, incluindo aplicações web.",
  },
  {
    id: "dotnet",
    name: ".NET",
    icon: <DiDotnet />,
    description:
      "Utilização do framework para criar aplicações versáteis em diversos ambientes.",
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
