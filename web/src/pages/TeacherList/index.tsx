import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { Container, SearchTeachers, Main } from "./styles";

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
          <Select
            name="subject"
            label="Disciplina"
            options={[
              {
                value: "Circuitos Polifásicos",
                label: "Circuitos Polifásicos",
              },
              {
                value: "Circuitos Elétricos I",
                label: "Circuitos Elétricos I",
              },
              { value: "Física III", label: "Física III" },
              { value: "Cálculo III", label: "Cálculo III" },
              { value: "Automação Industrial", label: "Automação Industrial" },
              { value: "Sistemas de Potência", label: "Sistemas de Potência" },
              {
                value: "Distribuição de Energia",
                label: "Distribuição de Energia",
              },
              {
                value: "Lógica de Programação",
                label: "Lógica de Programação",
              },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
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
