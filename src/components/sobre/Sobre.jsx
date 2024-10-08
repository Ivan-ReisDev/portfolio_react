import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Google from "../../assets/Programmer-rafiki.png";
import "./sobre.css";

const Sobre = () => {
  return (
    <>
      <section className="sobre" id="sobre">
        <div className="content-sobre">
          <div className="img">
            <img src={Google} alt="" />
          </div>

          <div className="paragrafo">
            <h3>Sobre mim</h3>
            <p>
              Apaixonado por tecnologia, tenho sólida experiência como
              desenvolvedor Full-Stack atuando como PJ, o que me permitiu
              adquirir uma compreensão prática de projetos reais. Nos últimos 12
              meses, atuei como desenvolvedor Full-Stack na RA1 Tecnologia, além
              de projetos como freelancer. Tenho expertise nas seguintes
              tecnologias: <span> React/Next.js, JavaScript (ES6), Node.js, TypeScript,
              Tailwind CSS e MongoDB. </span>
            </p>
            <p>Hoje, estou em busca de novos desafios e
              oportunidades que me permitam ampliar minha experiência,
              contribuindo para o crescimento e sucesso da empresa onde estiver
              atuando</p>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              className="links"
            >
              Visitar Linkedin{" "}
              <span>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
