import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";

import {
  Container,
  PageLandingContent,
  LogoContainer,
  HeroImg,
  ButtonsContainer,
  TotalConnections,
} from "./styles";

import { ThemeColorContext } from "../../context/ThemeContext";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import api from "../../services/api";

const Landing: React.FC = () => {
  const { mode, toggleTheme } = useContext(ThemeColorContext);

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("/connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <Container>
      <PageLandingContent id="page-landing-content">
        <Switch
          onChange={toggleTheme}
          checked={mode.title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={mode.colors.secondary}
          onColor={mode.colors.secondaryDark}
        />

        <LogoContainer>
          <img src={logoImg} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImg>
          <img src={landingImg} alt="Plataforma de estudos" />
        </HeroImg>

        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Ensinar
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </PageLandingContent>
    </Container>
  );
};

export default Landing;
