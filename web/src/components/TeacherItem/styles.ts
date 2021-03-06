import styled from "styled-components";

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.boxBase};
  border: 2px solid ${({ theme }) => theme.colors.lineInWhite};
  border-radius: 0.8rem;
  margin-top: 2rem;
  overflow: hidden;

  @media (min-width: 700px) {
    header,
    footer {
      padding: 3.2rem;

      a {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;

        img {
          margin-right: 1.6rem;
        }
      }
    }

    > p {
      padding: 0 3.2rem;
    }

    p strong {
      display: initial;
      margin-left: 1.6rem;
    }
  }
`;

export const TeacherItemHeader = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  div {
    margin-left: 2.4rem;

    strong {
      font: 700 2.4rem Archivo;
      display: block;
      color: ${({ theme }) => theme.colors.textTitle};
    }

    span {
      font-size: 1.6rem;
      display: block;
      margin-top: 0.4rem;
    }
  }

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
`;

export const Footer = styled.footer`
  padding: 3.2rem 2rem;
  background: ${({ theme }) => theme.colors.boxFooter};
  border-top: 1px solid ${({ theme }) => theme.colors.lineInWhite};
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p strong {
    color: ${({ theme }) => theme.colors.textTitle};
    font-size: 1.6rem;
    display: block;
  }

  a {
    width: 20rem;
    height: 5.6rem;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.buttonText};
    border: 0;
    border-radius: 0.8rem;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;
    text-decoration: none;

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }
  }
`;
