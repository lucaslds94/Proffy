import React, { useState, FormEvent } from "react";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { Container, SearchTeachers, Main } from "./styles";

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const response = await api.get("classes", {
      params: { subject, week_day, time },
    });

    if (response.data.error) return;

    setTeachers(response.data);
  };

  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Disciplina"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
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
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </SearchTeachers>
      </PageHeader>

      <Main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </Main>
    </Container>
  );
};

export default TeacherList;
