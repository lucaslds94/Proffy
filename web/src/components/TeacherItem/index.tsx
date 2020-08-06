import React from "react";

import { Container, TeacherItemHeader, Footer } from "./styles";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <Container>
      <TeacherItemHeader>
        <img src={teacher.avatar} alt="Imagem de perfil" />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </TeacherItemHeader>

      <p>{teacher.bio}</p>

      <Footer>
        <p>
          Preço/hora
          <strong>R${teacher.cost}</strong>
        </p>
        <a href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="Ícone whatsapp" />
          Entrar em contato
        </a>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
