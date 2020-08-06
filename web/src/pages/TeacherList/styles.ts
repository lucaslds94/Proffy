import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  label {
    color: ${({ theme }) => theme.colors.textInPrimary};
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
    margin-top: 5.5rem;

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -2.8rem;
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  p {
    padding: 0 1.6rem;
  }

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
