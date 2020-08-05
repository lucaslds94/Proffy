import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";

import { Container } from "./styles";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: "8:00 AM", to: "8:00 PM" },
    ]);
  };

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input name="cost" label="Custo da sua hora/aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button onClick={addNewScheduleItem} type="button">
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => {
            return (
              <div className="schedule-item" key={scheduleItem.week_day}>
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

                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </Container>
  );
};

export default TeacherForm;
