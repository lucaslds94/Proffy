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

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
