import React,{useState} from 'react'
import Carrera from './Carrera';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';


const BlasPascal = () => {
    const[carreras, setCarreras] = useState(
        [
            {
                id: 1,
                name: "Lic. en Turismo",
                años: "4"
            },
            {
                id: 2,
                name: "Lic. en Gestión del Turismo",
                años: "Extensión de +2 años al título de Lic. en Turismo"
            },
            {
                id: 3,
                name: "Lic. en Gestión Ambiental",
                años: "4"
            },
            {
                id: 4,
                name: "Lic. en Higiene y Seguridad Laboral ",
                años: "4"
            },
            {
                id: 5,
                name: "Gestión de Empresas",
                años: "4"
            },
            {
                id: 6,
                name: "Lic. en Administración ",
                años: "4"
            },
            {
                id: 7,
                name: "Lic. en Administración (Orientación Marketing) ",
                años: "4"
            },
            {
                id: 8,
                name: "Lic. en Administración (Orientación Comercio Ext.) ",
                años: "4"
            },
            {
                id: 9,
                name: "Lic. en Gestión de Recursos Humanos ",
                años: "4"
            },
            {
                id: 10,
                name: "Lic. en Marketing",
                años: "4"
            },
            {
                id: 11,
                name: "Lic. en Comercio Internacional",
                años: "4 - Extensión de +2 años"
            },
            {
                id: 12,
                name: "Tec. en Gestión de PyME ",
                años: "3"
            },
            {
                id: 13,
                name: "Tec. en Gestión Bancaria",
                años: "3"
            },
            {
                id: 14,
                name: "Tec. en Gestión de Sociedades Cooperativas ",
                años: "3"
            },
            {
                id: 15,
                name: "Tec. en Gestión de Empresas Agropecuarias",
                años: "2"
            },
            {
                id: 16,
                name: "Arquitectura ",
                años: "5"
            },
            {
                id: 17,
                name: "Lic. en Diseño Gráfico",
                años: "4"
            },
            {
                id: 18,
                name: "Lic. en Psicopedagogía ",
                años: " 4 Extension de +2años"
            },
            {
                id: 19,
                name: "Lic. en Educación Física",
                años: "Extensión de +2 años al título de Prof. Ed. Física"
            },
            {
                id: 20,
                name: "Lic. en Gestión de Instituciones Educativas ",
                años: "Extensión de +2 años"
            },
            {
                id: 21,
                name: "Lic. en Gestión de la Educación en Contextos de Encierro ",
                años: "Extensión de +2 años"
            },
            {
                id: 22,
                name: "Ingeniería Informática ",
                años: "5"
            },
            {
                id: 23,
                name: "Ingeniería en Telecomunicaciones ",
                años: "5"
            },
            {
                id: 24,
                name: "Comunicación ",
                años: "5"
            },
            {
                id: 25,
                name: "Lic. en Comunicación Audiovisual ",
                años: "5"
            },
            {
                id: 26,
                name: "Lic. en Periodismo y Nuevos Medios ",
                años: "5"
            },
            {
                id: 27,
                name: "Lic. en Comunicación Institucional ",
                años: "5"
            },
            {
                id: 28,
                name: "Lic. en Relaciones Públicas ",
                años: "4"
            },
            {
                id: 29,
                name: "Lic. en Publicidad ",
                años: "4"
            },
            {
                id: 30,
                name: "Abogacía ",
                años: "5"
            },
            {
                id: 31,
                name: "Notariado ",
                años: "5 – Extensión de +1 años al título de Abogacía"
            },
            {
                id: 32,
                name: "Lic. en Seguridad ",
                años: "4"
            },
            {
                id: 33,
                name: "Lic. en Gestión de la Seguridad ",
                años: "5 - Extensión de +2 años al título de Lic. en Seguridad"
            },
            {
                id: 34,
                name: "Martillero, Corredor Público y Corredor Inmobiliario ",
                años: "3"
            },
        ]
    );

    return (
    <>
        <div className='row'>
            {carreras.map((carrera) => {
                return(
                    <MDBListGroup style={{ minWidth: '22rem' }}>
                        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                            
                            <Carrera key={carrera.id} name={carrera.name}/>
                            
                            <MDBBadge pill>{carrera.años} años</MDBBadge>
                        </MDBListGroupItem>
                        
                    </MDBListGroup>
                );
            })}
            <a href='https://upc.edu.ar/' className='mt-3'>Sitio Web</a>
        </div>
    </>
      
    )
}

export default BlasPascal