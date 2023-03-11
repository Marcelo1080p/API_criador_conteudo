import { useEffect, useState } from 'react'
import { getAllCriadores } from './api';
import './App.css'
import { Card } from './Components/Cards/Card.jsx';



function App() {

  const [criador, setCriador] = useState([]);
  
  useEffect(() => {
    getAllCriadores().then((res) => setCriador(res.data));
  }, []);

 
  return (
    <div className="App">
      <main>

      </main>
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
