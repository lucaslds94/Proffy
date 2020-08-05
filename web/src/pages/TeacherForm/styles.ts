import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  min-height: 100vh;

  main {
    background: ${({ theme }) => theme.colors.boxBase};
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    border: 2px solid ${({ theme }) => theme.colors.lineInWhite};
    margin: -3.2rem auto 3.2rem;
    padding-top: 3.4rem;
    overflow: hidden;

    @media (min-width: 700px) {
      .schedule-item {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;
      }
    }

    fieldset {
      border: 0;
      padding: 0 2.4rem;
      margin-top: 6.4rem;

      @media (min-width: 700px) {
        padding: 0 6.4rem;
      }

      legend {
        font: 700 2.4rem Archivo;
        color: ${({ theme }) => theme.colors.textTitle};
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.primaryDarker};

        button {
          background: none;
          border: 0;
          color: ${({ theme }) => theme.colors.primaryDarker};
          font: 700 1.6rem Archivo;
          transition: color 0.2s;

          &:hover {
            color: ${({ theme }) => theme.colors.secondaryDark};
          }
        }
      }
    }
    footer {
      margin-top: 3.2rem;
      padding: 4rem 2.4rem;
      background: ${({ theme }) => theme.colors.boxFooter};
      border-top: 1px solid ${({ theme }) => theme.colors.primaryDarker};

      @media (min-width: 700px) {
        padding: 4rem 6.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.colors.textComplement};

        @media (min-width: 700px) {
          justify-content: space-between;
        }

        img {
          margin-right: 2rem;
        }
      }

      button {
        width: 100%;
        height: 5.6rem;
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.buttonText};
        border: 0;
        border-radius: 0.8rem;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.2s;
        margin-top: 3.2rem;

        @media (min-width: 700px) {
          width: 20rem;
          margin-top: 0;
        }

        &:hover {
          background: ${({ theme }) => theme.colors.secondaryDark};
        }
      }
    }
  }
`;

export const Main = styled.main``;
