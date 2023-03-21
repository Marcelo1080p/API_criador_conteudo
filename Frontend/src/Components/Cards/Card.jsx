import { InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import "./Card.css";

export const Card = (props) => {
    const cores = ( cor ) => {
        return cor == "Front-end" ? "#00C1CB" : cor == "Back-end" ? "black" : cor == "Full-stack" ? "yellow" : "#0f0"
    }

    return(
        <section className="container-card" >
            <img src={props.img}/>
            <section className="dados">
                <div className="descricao">
                    <h2 className='nome'>{props.nome}</h2>
                    <p 
                        className='tipoDev'
                        style={{color: cores(props.tipoDev)}}>
                        {props.tipoDev}
                    </p>
                </div>
                <div className="redes">
                    <a href={props.insta} target="_blank" rel="noopener noreferrer">
                        <InstagramOutlined
                            className='icons'
                            style={{color: "#FFF", fontSize: "1.4rem"}}
                         />
                    </a>

                    <a href={props.youTube} target="_blank" rel="noopener noreferrer">
                    <YoutubeOutlined
                        className='icons'
                        style={{color: "#FFF", fontSize: "1.6rem"}}
                     />
                    </a>
                </div>
            </section>
        </section>
    );
};