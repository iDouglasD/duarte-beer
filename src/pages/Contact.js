import React from "react";
import "../styles/Contact.css";
import Beer from "../assets/beer.png";

function Contact() {
    return (
        <div className="contact">
            <div
                className="left_side_form"
                style={{ backgroundImage: `url(${Beer})` }}
            ></div>
            <div className="right_side_form">
                <h1>Fala comigo!</h1>
                <form id="contact_form" action="" method="POST">
                    <label htmlFor="name">Nome completo</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Digite o seu nome campeão..."
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Digite o seu email campeão..."
                    />
                    <label htmlFor="email">Manda a boa!</label>
                    <textarea
                        name="mensagem"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Digite a sua mensagem campeão..."
                        required
                    ></textarea>
                    <button type="submit">Envie a sua mensagem!</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
