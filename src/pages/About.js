import React from "react";
import "../styles/About.css";
import Darth from "../assets/darthbeer.jpg";

function About() {
    return (
        <div className="about_container grid">
            <div className="img_about">
                <img src={Darth} alt="Darth Vader com copo de cerveja" />
            </div>
            <div className="about_text">
                <h2>Sobre nós</h2>
                <p>
                    Vamos começar o texto com uma pergunta: o que é de fato
                    cerveja artesanal?
                    <br /> O conceito é amplo e gera discussão, pois para alguns
                    mais radicais cerveja artesanal é apenas aquela produzida em
                    pequena ou microescala, com equipamentos simples, não
                    automatizados e utilizando ingredientes bem definidos — como
                    água, malte de cevada (e alguns outros grãos malteados ou
                    não), lúpulo e levedura (também conhecida como fermento).
                </p>
            </div>
        </div>
    );
}

export default About;
