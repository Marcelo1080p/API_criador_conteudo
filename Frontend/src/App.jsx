import React, { useEffect, useState } from "react";
import { getAllCriadores, getCriadorByName } from "./api";
import "./App.css";
import { Card } from "./Components/Cards/Card.jsx";
import { Input } from "antd"

function App() {
  const [criador, setCriador] = useState([]);
  const [nome, setNome] = useState("");
  const { Search } = Input;
  useEffect(() => {
    if (nome !== "") {
      getCriadorByName(nome)
        .then((res) => setCriador(res.data))
        .catch((err) => console.log(err));
    } else {
      getAllCriadores()
        .then((res) => setCriador(res.data))
        .catch((err) => console.log(err));
    }
  }, [nome]);

  return (
    <div className="App">
      <main className="pesquisa">
        <Search
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hello"
          
        />
      </main>

      <section className="container">
        {criador.map((criadorContent) => (
          <Card
            key={criadorContent.id}
            img={criadorContent.imgLink}
            nome={criadorContent.nome}
            tipoDev={criadorContent.tipoDev}
            insta={criadorContent.insta}
            youTube={criadorContent.youTube}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
