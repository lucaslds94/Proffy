import React from "react";

import { Container, TeacherItemHeader, Footer } from "./styles";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <TeacherItemHeader>
        <img
          src="https://avatars3.githubusercontent.com/u/57119435?s=460&u=1186fb6d9a294096613dc59eee935523e6cb661f&v=4"
          alt="Imagem de perfil"
        />

        <div>
          <strong>Lucas Lima</strong>
          <span>Circuitos polifásicos</span>
        </div>
      </TeacherItemHeader>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> <br />
        Fugit quis quam iusto nam saepe facilis, atque labore deleniti
        necessitatibus magni tenetur eum nobis molestias expedita eius pariatur
        illum? Repudiandae, ipsa?
      </p>

      <Footer>
        <p>
          Preço/hora
          <strong>R$60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Ícone whatsapp" />
          Entrar em contato
        </button>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
