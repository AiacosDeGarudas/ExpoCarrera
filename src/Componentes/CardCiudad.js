import React from 'react'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBCardOverlay } from 'mdb-react-ui-kit';
import '../Componentes/CardCiudad.css';


const CardCiudad = () => {
  return (
    <>
        <div className='container'>
          <MDBCard background='dark' className='text-center text-white cardCiudad'>
            <MDBCardImage overlay src='https://images3.alphacoders.com/591/thumb-1920-591439.jpg' alt='...' />
            <MDBCardOverlay>
              <MDBCardTitle>Ciudad de Cordoba</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </MDBCardText>
              <MDBCardText>Last updated 3 mins ago</MDBCardText>
            </MDBCardOverlay>
          </MDBCard>
        </div>
    </>
  )
}

export default CardCiudad