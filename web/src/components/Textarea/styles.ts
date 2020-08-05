import styled from "styled-components";

export const TextareaBlock = styled.div`
  position: relative;
  margin:2.4rem 0 1.4rem;

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.colors.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors.lineInWhite};
    outline: 0;
    padding: 1.2rem 1.6rem;
    resize: vertical;
    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    content: "";
    width: calc(100% - 3.2rem);
    height: 3px;
    background: ${({ theme }) => theme.colors.primaryLight};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }

  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`;
