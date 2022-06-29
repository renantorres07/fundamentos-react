import './App.css'
import React from "react";

import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';

export default props => (
    <div className="App">
        <Card titulo="#06 - Condicional v2" color="#FA6900">
        <Condicional numero = {10}></Condicional>
        </Card>
        <Card titulo="#05 - Condicional v1">
        <Condicional numero = {11}></Condicional>
        </Card>
        <Card titulo="#04 - Repetiçao">
        <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente Com Filhos">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente Com Parametro">
        <ComParametro titulo = "Esse é o titulo"
            subtitulo = "Esse é o subtitulo"/>
        <ComParametro titulo = "Opa" subtitulo = "Epa"/>
        </Card>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro />
            </Card>

    </div>

);