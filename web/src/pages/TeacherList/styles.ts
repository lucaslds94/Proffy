import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  label {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -2.8rem;
  }
`;

export const InputBlock = styled.div`
  position: relative;
  margin-bottom: 1.4rem;

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    content: "";
    width: calc(100% - 3.2rem);
    height: 2px;
    background: ${({ theme }) => theme.colors.primaryLight};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  @media (min-width: 700px) {
    margin-bottom: 0;
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
