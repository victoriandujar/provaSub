import React, { useState } from "react";
import api from "../../services/api";

import { Container } from "./styles";

const CreateStudent: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  async function handleSubmit(e: React.SyntheticEvent) {
    const info = {
      name: name,
      age: age,
    };

    try {
      await api.post("/", info);
    } catch (err: any) {
      console.log(err);
    }

    e.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Aluno</label>
        <input
          type="text"
          placeholder="Informe o nome do aluno"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="age" style={{ marginTop: 12 }}>
          Idade
        </label>
        <input
          type="text"
          placeholder="Informe a idade do aluno"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};

export default CreateStudent;
