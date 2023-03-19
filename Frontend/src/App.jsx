import { useEffect, useState } from 'react'
import { getAllCriadores } from './api';
import './App.css'
import { Card } from './Components/Cards/Card.jsx';
import { ContainerMain } from './Components/ContainerMain/ContainerMain';



function App() {

  const [criador, setCriador] = useState([]);
  
  useEffect(() => {
    getAllCriadores().then((res) => setCriador(res.data))
      .catch((err) => console.log(err));
  }, []);

 
  return (
    <div className="App">
      <ContainerMain/>
      <section className='container'>
        {criador.map((criadorContent) => (
          <Card
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
};

export default App
