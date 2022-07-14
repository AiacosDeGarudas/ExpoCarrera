import React,{useState} from 'react'
import Carrera from './Carrera';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';

const Cervantes = () => {
    const[carreras, setCarreras] = useState(
        [
            {
                id: 1,
                name: "Lic",
                años: "4"
            },
            {
                id: 2,
                name: "Lic",
                años: "-"
            },
            {
                id: 3,
                name: "Lic",
                años: "4"
            },
            {
                id: 4,
                name: "Lic",
                años: "4"
            },
            {
                id: 5,
                name: "Gestión",
                años: "4"
            },
            {
                id: 6,
                name: "Lic",
                años: "4"
            },
            {
                id: 7,
                name: "Lic",
                años: "4"
            },
            {
                id: 8,
                name: "Lic",
                años: "4"
            },
            {
                id: 9,
                name: "Lic",
                años: "4"
            },
            {
                id: 10,
                name: "Lic",
                años: "4"
            },
            {
                id: 11,
                name: "Lic",
                años: "4"
            },
            {
                id: 12,
                name: "Tec",
                años: "3"
            },
            {
                id: 13,
                name: "Te",
                años: "3"
            },
            {
                id: 14,
                name: "Te",
                años: "3"
            },
            {
                id: 15,
                name: "Tec",
                años: "2"
            },
            {
                id: 16,
                name: "Arquitectura ",
                años: "5"
            },
            {
                id: 17,
                name: "Lic",
                años: "4"
            },
            {
                id: 18,
                name: "Lic",
                años: " 4"
            },
            {
                id: 19,
                name: "Lic",
                años: ""
            },
            {
                id: 20,
                name: "Lic",
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
        <a href='https://www.cervantes.edu.ar/' className='mt-3'>Ver las carreras en la pagina oficial</a>
            
        </div>
    </>
      
    )
}

export default Cervantes