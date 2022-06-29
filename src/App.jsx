import './App.css'
import React from "react";

import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';

export default props => (
    <div className="App">
        <Card titulo="#08 - Comunicacao Indireta" color="#000">
            <Super></Super>
        </Card>
        <Card titulo="#07 - Comunicacao Direta" color="#4298b5">
            <Pai sobrenome="Freitas"></Pai>
        </Card>
        <Card titulo="#06 - Condicional v2" color="#FA6900">
        <Condicional numero = {10}></Condicional>
        </Card>
        <Card titulo="#05 - Condicional v1" color="#E94C6F">
        <Condicional numero = {11}></Condicional>
        </Card>
        <Card titulo="#04 - Repetiçao" color="#008BBA">
        <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente Com Filhos" color="#D96459">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente Com Parametro" color="#FF85CB">
        <ComParametro titulo = "Esse é o titulo"
            subtitulo = "Esse é o subtitulo"/>
        <ComParametro titulo = "Opa" subtitulo = "Epa"/>
        </Card>
            <Card titulo="#01 - Primeiro Componente" color="#92B06A">
                <Primeiro />
            </Card>

    </div>

);