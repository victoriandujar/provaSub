import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Container } from "./styles";

interface List {
  id: number;
  name: string;
  age: number;
}

const ListStudent: React.FC = () => {
  const [list, setList] = useState<List[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStudent() {
      setLoading(true);

      try {
        const response = await api.get("/");
        const { data } = response;

        setList(data);
        setLoading(false);
      } catch (err: any) {
        console.log(err);
      }
    }

    loadStudent();
  }, []);

  return (
    <Container>
      {!loading ? (
        <>
          {list.map((students) => (
            <div className="list" key={students.id}>
              <p>
                {students.name} - {students.age} anos
              </p>
            </div>
          ))}
        </>
      ) : (
        "Carregando..."
      )}
    </Container>
  );
};

export default ListStudent;
