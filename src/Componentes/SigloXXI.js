import React,{useState} from 'react'
import Carrera from './Carrera';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';
const SigloXXI = () => {

    const[carrerasSiglo, setCarrerasSiglo] = useState(
        [
            {
                id: 1,
                name: "Ciencia",
                años: "6"
            },


        ]
    );

  return (
    <>
        <div className='row'>
            <a href='https://www.ies21.edu.ar/carreras/'>Ver las carreras en la pagina oficial.</a>
        </div>
    </>
  )
}

export default SigloXXI