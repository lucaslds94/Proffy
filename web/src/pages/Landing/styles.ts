import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInPrimary};
`;

export const PageLandingContent = styled.div`
  width: 90vw;
  max-width: 700px;
  margin: 20px 0;

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total";
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const HeroImg = styled.div`
  display: flex;
  place-content: center;
  img {
    width: 90%;
  }

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;

    img {
      width: 100%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 6rem;
    border-radius: 0.8rem;
    font: 700 1.8rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonText};

    transition: background-color 0.2s;

    &:first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;
      margin-right: 1rem;
    }

    &.study {
      background: ${({ theme }) => theme.colors.primaryLighter};

      &:hover {
        background: ${({ theme }) => theme.colors.primaryLight};
      }
    }

    &.give-classes {
      background: ${({ theme }) => theme.colors.secondary};

      &:hover {
        background: ${({ theme }) => theme.colors.secondaryDark};
      }
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
      height: 10rem;
    }
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;
