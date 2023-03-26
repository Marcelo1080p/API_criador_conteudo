import React, { useEffect, useState } from "react";
import { getAllCriadores, getCriadorByName } from "./api";
import "./App.css";
import { Card } from "./Components/Cards/Card.jsx";
import { Input } from "antd"
import InputPesquisa from "./Components/InputPesquisa";

function App() {
  const [criador, setCriador] = useState([]);
  const [nome, setNome] = useState("");
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
        <InputPesquisa
          name="nome"
          id="nome"
          value={nome}
          type="text"
          placeholder="Pesquise por um criador de conteúdo"
          aoAlterado={e => setNome(e)}
        />

      <section className="containerS">
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
