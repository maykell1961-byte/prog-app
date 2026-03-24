import { useState } from 'react'
import './App.css'
import Pneu from './Componentes/Pneu';
import PapaiNoel from './Componentes/PapaiNoel';
import Media from './Componentes/Media';
import Bondinho from './Componentes/Bondinho';
import qtdPuns from './Componentes/qtdPuns';
import tiposDeCombustiveis from './Componentes/tiposDeCombustiveis';
import CorridaDeLesmas from './Componentes/CorridaDeLesmas';
import FilmeDaVovó from './Componentes/FilmeDaVovó';


function App() {
  return (
    <>
    <h1>Exercícios</h1>
    <br/>
    <Pneu />
    <br/>
    <PapaiNoel />
    <br/>
    <Media/>
    <br/>
    <Bondinho/>
    <br/>
    <qtdPuns/>
    <br/>
    <tiposDeCombustiveis/>
    <br />
    <CorridaDeLesmas/>
    <br />
    <FilmeDaVovó/>
    </>
  )
}

export default App
