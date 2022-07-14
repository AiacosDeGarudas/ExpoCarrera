import React from 'react'
import '../Componentes/Tabs.css';
import { useState } from "react";
import ColegioRegional from './ColegioRegional';

const TabColegioRegional = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs btn btn-primary"}
            onClick={() => toggleTab(1)}
          >
            CARRERAS
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs btn btn-primary"}
            onClick={() => toggleTab(2)}
          >
            REDES SOCIALES
          </button>
         
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Carreras Universitarias</h2>
          
            <div className='listaCarreras'>
              <ColegioRegional />
            </div>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Social</h2>
       
            <a href='#'><i className="fab fa-instagram fa-3x m-2"></i></a>
            <a href='#'><i className="fab fa-youtube fa-3x m-2"></i></a>
            <a href='#'><i className="fab fa-facebook fa-3x m-2"></i></a>
            <a href='#'><i className="fab fa-whatsapp fa-3x m-2"></i></a>
  
          </div>
         
        </div>
      </div>
    );
}

export default TabColegioRegional