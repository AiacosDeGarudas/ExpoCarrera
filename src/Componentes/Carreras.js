import React,{useState} from 'react'
import Carrera from './Carrera';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';

const Carreras = (props ) => {

    const[carreras, setCarreras] = useState(
        [
            {
                id: 1,
                name: "Abogacia",
                años: "6"
            },
            {
                id: 2,
                name: "Acompañamiento Terapéutico",
                años: "3"
            },
            {
                id: 3,
                name: "Administración",
                años: "5"
            },
            {
                id: 4,
                name: "Administración de Cooperativa y Mutuales",
                años: "3"
            },
            {
                id: 5,
                name: "Agroalimentos",
                años: "4"
            },
            {
                id: 6,
                name: "Agronomía",
                años: "5"
            },
            {
                id: 7,
                name: "Antropología",
                años: "5"
            },
            {
                id: 8,
                name: "Archivología",
                años: "5"
            },
            {
                id: 9,
                name: "Arquitectura",
                años: "6"
            },
            {
                id: 10,
                name: "Artes Visuales",
                años: "5"
            },
            {
                id: 11,
                name: "Astronomía",
                años: "5"
            },
            {
                id: 12,
                name: "Bibliotecología y Documentación",
                años: "3"
            },
            {
                id: 13,
                name: "Biología",
                años: "5"
            },
            {
                id: 14,
                name: "Bioquímica",
                años: "5"
            },
            {
                id: 15,
                name: "Biotecnología",
                años: "5"
            },
            {
                id: 16,
                name: "Bromatología",
                años: "3"
            },
            {
                id: 17,
                name: "Ciencias Políticas",
                años: "5"
            },
            {
                id: 18,
                name: "Ciencias Económicas",
                años: "5"
            },
            {
                id: 19,
                name: "Ciencias de la Computación",
                años: "5"
            },
            {
                id: 20,
                name: "Ciencias de la Educación",
                años: "5"
            },
            {
                id: 21,
                name: "Ciencias Jurídicas (Profesorado)",
                años: "4"
            },
            {
                id: 22,
                name: "Cine y Televisión",
                años: "5"
            },
            {
                id: 23,
                name: "Comercialización (Marketing)",
                años: "3"
            },
            {
                id: 24,
                name: "Comunicación (Tecnicatura a distancia)",
                años: "3"
            },

            {
                id: 26,
                name: "Comunicación Social",
                años: "5"
            },
            {
                id: 27,
                name: "Comunicación Visual",
                años: "3"
            },
            {
                id: 28,
                name: "Construcción",
                años: "4"
            },
            {
                id: 29,
                name: "Contador Público",
                años: "5"
            },
            {
                id: 30,
                name: "Corrección Literaria",
                años: "-"
            },
            {
                id: 31,
                name: "Diseño Industrial",
                años: "5"
            },
            {
                id: 32,
                name: "Economía",
                años: "5"
            },
            {
                id: 33,
                name: "Electromecánica",
                años: "3"
            },
            {
                id: 34,
                name: "Enfermería",
                años: "5"
            },
            {
                id: 35,
                name: "Farmacia",
                años: "5"
            },
            {
                id: 36,
                name: "Filosofía",
                años: "5"
            },
            {
                id: 37,
                name: "Física",
                años: "5"
            },
            {
                id: 38,
                name: "Fonoaudiología",
                años: "5"
            },
            {
                id: 39,
                name: "Geografía",
                años: "4"
            },
            {
                id: 40,
                name: "Geología",
                años: "5"
            },
            {
                id: 41,
                name: "Gestión Financiera",
                años: "3"
            },
            {
                id: 42,
                name: "Historia (Licenciatura)",
                años: "5"
            },
            {
                id: 43,
                name: "Ingeniería Aeronáutica",
                años: "5"
            },
            {
                id: 44,
                name: "Ingeniería Ambiental",
                años: "5"
            },
            {
                id: 45,
                name: "Ingeniería Biomédica",
                años: "5"
            },
            {
                id: 46,
                name: "Ingeniería Civil",
                años: "5"
            },
            {
                id: 47,
                name: "Ingeniería Electromecánica",
                años: "5"
            },
            {
                id: 48,
                name: "Ingeniería Electrónica",
                años: "5"
            },
            {
                id: 49,
                name: "Ingeniería en Agrimensura",
                años: "5"
            },
            {
                id: 50,
                name: "Ingeniería en Computación",
                años: "5"
            },
            {
                id: 51,
                name: "Ingeniería Industrial",
                años: "5"
            },
            {
                id: 52,
                name: "Ingeniería Mecánica",
                años: "5"
            },
            {
                id: 53,
                name: "Ingeniería Química",
                años: "5"
            },
            {
                id: 54,
                name: "Ingeniería Zootecnista",
                años: "5"
            },
            {
                id: 55,
                name: "Jardinería y Floricultura",
                años: "3"
            },
            {
                id: 56,
                name: "Kinesiología y Fisioterapia",
                años: "5"
            },
            {
                id: 57,
                name: "Laboratorio Clínico e Histopatología",
                años: "3"
            },
            {
                id: 58,
                name: "Lenguas",
                años: "5"
            },
            {
                id: 59,
                name: "Letras Clásicas",
                años: "5"
            },
            {
                id: 60,
                name: "Letras Modernas",
                años: "5"
            },
            {
                id: 61,
                name: "Martillero y Corredor Público",
                años: "3"
            },
            {
                id: 62,
                name: "Matemática (Licenciatura)",
                años: "5"
            },
            {
                id: 63,
                name: "Medicina",
                años: "6"
            },
            {
                id: 64,
                name: "Música",
                años: "5"
            },
            {
                id: 65,
                name: "Notariado",
                años: "4"
            },
            {
                id: 66,
                name: "Nutrición",
                años: "5"
            },
            {
                id: 67,
                name: "Odontología",
                años: "5"
            },
            {
                id: 68,
                name: " Oficios (Escuela de Formación en Oficios)",
                años: "-"
            },
            {
                id: 69,
                name: "Producción de Bioimágenes",
                años: "4"
            },
            {
                id: 70,
                name: "Psicología",
                años: "5"
            },
            {
                id: 71,
                name: "Química",
                años: "5"
            },
            {
                id: 72,
                name: "Recursos Humanos",
                años: "3"
            },
            {
                id: 73,
                name: "Sistemas de Informática",
                años: "3"
            },
            {
                id: 74,
                name: "Sociología",
                años: "3"
            },
            {
                id: 75,
                name: "Teatro",
                años: "5"
            },
            {
                id: 76,
                name: "Trabajo Social",
                años: "5"
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
        </div>
    </>
      
    )
  }

export default Carreras;