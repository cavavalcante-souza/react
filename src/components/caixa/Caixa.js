import React from 'react';
import './Caixa.css';
import Timer from '../timer/Timer';
import Botao from '../botao/Botao';

class Caixa extends React.Component{
    render(){ return (<section>
            <div className="main">
                <Timer></Timer>
                <div className="buttons">
                    <Botao conteudo="+"></Botao>
                    <Botao conteudo="-"></Botao>
                </div>
            </div>

            <div className="buttons">
                <Botao conteudo="Iniciar"></Botao>
                <Botao conteudo="Zerar"></Botao>
            </div>
        </section>)
    }
}

export default Caixa;