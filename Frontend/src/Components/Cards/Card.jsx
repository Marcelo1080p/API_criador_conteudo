import { InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import "./Card.css";

export const Card = (props) => {
    const rede = [{}]
    return(
        <section className="container-card">
            <img src={props.img}/>
            <section className="dados">
                <div className="descricao">
                    <h2>{props.nome}</h2>
                    <p>{props.tipoDev}</p>
                </div>
                <div className="redes">
                    <a href={props.insta} target="_blank" rel="noopener noreferrer">
                        <InstagramOutlined
                            style={{color: "#E75590"}}
                         />
                    </a>
                    
                    <a href={props.youTube} target="_blank" rel="noopener noreferrer">
                    <YoutubeOutlined
                        style={{color: "red"}}
                     />
                    </a>
                </div>
            </section>
        </section>
    );
};