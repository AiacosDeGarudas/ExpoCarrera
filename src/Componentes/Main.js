import React from 'react'
import Tabs from './Tabs';
import CardCiudad from './CardCiudad';
import '../Componentes/Main.css';
import { Accordion, Header, Item, Body, Image } from 'react-bootstrap';
import Cover from './cover/Cover.js';
import Footer from './Footer';
import SigloXXI from './SigloXXI';
import TabUTN from './TabUTN';
import TabCervantes from './TabCervantes';
import TabColegioRegional from './TabColegioRegional';
import TabBlasPascal from'./TabBlasPascal'  
import TabCatolica from './TabCatolica';
import TabSigloXXI from './TabSigloXXI';
import TabUNVM from './TabUNVM';
import TabColegioProvincial from './TabColegioProvincial';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import imagenExpo from '../imagenes/EXPOCARRERA.png'

const Main = () => {
  return (
    <div style={{ background: "linear-gradient(#ffffff, #00AB17)" }}>
      <Cover />
      <div className='IMGEXPO text-center'>
        
        <img src={imagenExpo} alt='Expo Carreras 2022'></img>
      </div>
      <div className='container'>
        <div className="card text-center">
          <div className="card-header"><strong>CORDOBA</strong></div>
            <div className="card-body">
              
              <div className='col-12'>
                <p>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Ver Universidades</a>
                </p>
                <div class="row">
                  <div class="col-12">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                      <div className="card card-body col-12">
                        <div class="text-center">
                          <Accordion className='col-12'>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>UNIVERSIDAD NACIONAL DE CORDOBA</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <Tabs />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>COLEGIO UNIVERSITARIO IES SIGLO 21</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <TabSigloXXI />
                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>UNIVERSIDAD TECNOLÓGICA NACIONAL -FACULTAD REGIONAL CÓRDOBA</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <TabUTN />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>INSTITUTO CERVANTES</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <TabCervantes />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>CENTRO REGIONAL UNIVERSITARIO CÓRDOBA IUA</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <TabColegioRegional />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="5">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>UNIVERSIDAD CATÓLICA DE CÓRDOBA (UCC)</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <TabCatolica />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="6">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>UNIVERSIDAD BLAS PASCAL</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <TabBlasPascal />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="7">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>UNIVERSIDAD PROVINCIAL DE CÓRDOBA (UPC)</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <TabColegioProvincial />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   
          </div>
          <div className="card-footer text-muted">Actualizado hace 1 dia</div>
        </div>

        <div className="card text-center">
          <div className="card-header"><strong>VILLA MARIA</strong></div>
            <div className="card-body">
              
              <div className='col-12'>
                <p>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">Ver Universidades</a>
                </p>
                <div class="row">
                  <div class="col-12">
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                      <div className="card card-body col-12">
                        <div class="text-center">
                          <Accordion className='col-12'>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>UNIVERSIDAD NACIONAL DE VILLA MARÍA</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <TabUNVM />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>COLEGIO UNIVERSITARIO IES SIGLO 21</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <TabSigloXXI />
                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/> UNIVERSIDAD TECNOLÓGICA NACIONAL -FACULTAD REGIONAL CÓRDOBA</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <Tabs />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>INSTITUTO CERVANTES</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <Tabs />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>CENTRO REGIONAL UNIVERSITARIO CÓRDOBA IUA</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <Tabs />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="5">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>UNIVERSIDAD CATÓLICA DE CÓRDOBA (UCC)</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <Tabs />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="6">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>UNIVERSIDAD BLAS PASCAL</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <Tabs />

                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="7">
                            <Accordion.Header><FontAwesomeIcon className='m-3' icon={faBuildingColumns}/>UNIVERSIDAD PROVINCIAL DE CÓRDOBA (UPC)</Accordion.Header>
                            <Accordion.Body>
                              <>
                              <Tabs />
                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   
          </div>
          <div className="card-footer text-muted">Actualizado hace 1 dia</div>
        </div>
      </div>
     
    </div>
    
  )
}

export default Main

