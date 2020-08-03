import React from "react";

import {
  Container,
  PageLandingContent,
  LogoContainer,
  HeroImg,
  ButtonsContainer,
  TotalConnections,
} from "./styles";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

const Landing = () => {
  return (
    <Container>
      <PageLandingContent id="page-landing-content">
        <LogoContainer>
          <img src={logoImg} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImg>
          <img src={landingImg} alt="Plataforma de estudos" />
        </HeroImg>

        <ButtonsContainer>
          <a href="/" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="/" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Ensinar
          </a>
        </ButtonsContainer>

        <TotalConnections>
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </PageLandingContent>
    </Container>
  );
};

export default Landing;
