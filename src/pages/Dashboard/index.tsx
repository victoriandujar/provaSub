import React from "react";
import CreateStudent from "../../components/CreateStudent";
import ListStudent from "../../components/ListStudent";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <div className="box">
        <CreateStudent />

        <h3 style={{ color: "#ECECEC", marginTop: 20 }}>Listagem</h3>
        <ListStudent />
      </div>
    </Container>
  );
};

export default Dashboard;
