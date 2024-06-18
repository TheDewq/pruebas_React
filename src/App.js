import logo from './logo.svg';
import './App.css';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

//importacion de interfaz

import Default from './components/Default';
import Inventario from './components/Inventarios.Js';


function App(){
  var [section, setSection] = useState("default")

  function Header(){
    return(
      <>
    <ul>
      <li>
        <button onClick={setSection("inventario")}>
          inventario
        </button>
      </li>
      <li>
      <button>
          compra
        </button>
      </li>
      <li>
        <button>venta</button>
      </li>
      <li>
               <button>devolucion</button>
      </li>
      <li>
              <button>Analisis</button>
      </li>
    </ul>
    <div>
      <button>
        Cerrar Sesion
      </button>
    </div>
    </>
    )
  }

  function Body(){
    switch(section){
      case "default":
        return(
          <Default />
        )
      case "inventario":
        return(
          <Inventario />
        )
    }
  }

  return(
    <>
    <Header />
    <Body />
    </>
  )
  
}


export default App;
