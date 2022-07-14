import React,{useState} from 'react'
import Carrera from './Carrera';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';
const UTN = () => {
    const[carreras, setCarreras] = useState(
        [
            {
                id: 1,
                name: "INGENIERÍA CIVIL",
                años: "5"
            },
            {
                id: 2,
                name: "INGENIERÍA ELÉCTRICA",
                años: "5"
            },
            {
                id: 3,
                name: "INGENIERÍA ELECTRÓNICA",
                años: "5"
            },
            {
                id: 4,
                name: "INGENIERÍA INDUSTRIAL",
                años: "5"
            },
            {
                id: 5,
                name: "INGENIERÍA MECÁNICA",
                años: "5"
            },
            {
                id: 6,
                name: "INGENIERÍA METALÚRGICA",
                años: "5"
            },
            {
                id: 7,
                name: "INGENIERÍA QUÍMICA",
                años: "5"
            },
            {
                id: 8,
                name: "INGENIERÍA EN SISTEMAS DE INFORMACIÓN",
                años: "5"
            },
            {
                id: 9,
                name: "DOCTORADO EN INGENIERÍA",
                años: "-"
            },
            {
                id: 10,
                name: "MAESTRÍAS",
                años: "-"
            },
            {
                id: 11,
                name: "ESPECIALIZACIONES",
                años: "-"
            },
            {
                id: 12,
                name: "TECNOLOGÍA EDUCATIVA",
                años: "-"
            },
            {
                id: 13,
                name: "HIGIENE Y SEGURIDAD EN EL TRABAJO",
                años: "-"
            },
            {
                id: 14,
                name: "COMERCIO ELECTRÓNICO",
                años: "-"
            },
            {
                id: 15,
                name: "PROGRAMACIÓN",
                años: "-"
            },
            {
                id: 16,
                name: "INDUSTRIAS ALIMENTARIAS",
                años: "-"
            },
            {
                id: 17,
                name: "MECATRÓNICA",
                años: "-"
            },
            {
                id: 18,
                name: "MANTENIMIENTO INDUSTRIAL",
                años: "-"
            },
            {
                id: 19,
                name: "MOLDES MATRICES Y DISPOSITIVOS",
                años: ""
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
            <a href='https://www.frc.utn.edu.ar/secretarias/academica/carreras/#s1' className='mt-3'>Link para ver todas las carreras</a>
        </div>
    </>
      
    )
}

export default UTN