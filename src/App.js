import React from "react";
import {Header } from "./componentes/Header";
import { ProductosLista} from "./componentes/Productos/index";
import 'boxicons'; 
function App() {
  const newLocal = <ProductosLista />;
  return (
    <div className="App">
      <Header/>
      <ProductosLista/>
    </div>
  );
}

export default App;
