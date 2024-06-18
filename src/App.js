import logo from './logo.svg';
import './App.css';
import { useLayoutEffect } from 'react';

function Header(){
  return(
  <ul>
    <li>
      <button>
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
  )
}

function App(){
  return(
    <Header />
  )
}

export default App;
