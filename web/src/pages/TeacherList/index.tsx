import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

import { Container, SearchTeachers, Main } from "./styles";

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
          <Input name="subject" label="Disciplina" />
          <Input name="week_day" label="Dia da Semana" />
          <Input type="time" name="time" label="Hora" />
        </SearchTeachers>
      </PageHeader>

      <Main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </Main>
    </Container>
  );
};

export default TeacherList;
