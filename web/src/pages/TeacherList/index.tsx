import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import { Container, SearchTeachers, InputBlock, Main } from "./styles";

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Estes sãos os proffys disponíveis.">
        <SearchTeachers>
          <InputBlock>
            <label htmlFor="subject">Disciplina</label>
            <input type="text" id="subject" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="time">Hora</label>
            <input type="text" id="week_day" />
          </InputBlock>
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
