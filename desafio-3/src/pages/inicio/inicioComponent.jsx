import styles from './inicioComponent.module.css';
import { Link } from 'react-router-dom';
import turnologo from './assets/talonario.png';
import reloj from './assets/reloj.png'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup
  } from 'mdb-react-ui-kit';
const inicioComponent = () => {
    return (
        <>
        <section>
            <h1 className=' fs-1 fw-bold text-warning'>
                BANCO EDUCACION IT
            </h1>
<div className='d-flex d-flex justify-content-center '>
<MDBCardGroup className='bg-transparent' >
      <MDBCard className='border border-3 bg-transparent '>
      <div className=' d-flex justify-content-center'>
       <a href={'./turno'}><MDBCardImage   src={turnologo} alt='TURNERO' position='top' /></a> </div>
        <MDBCardBody>
          <MDBCardTitle className='d-flex justify-content-center text-warning fw-bold'>¿QUIERES UN TURNO?</MDBCardTitle>
          <MDBCardText  className='d-flex justify-content-center'>
            Si precisas sacar un turno en nuestro banco.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted d-flex justify-content-center p-3 fst-italic '>La opción que se adapta a vos</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='border border-3 bg-transparent'>
        <div className='d-flex justify-content-center'>
        <a href={'./turnos'}><MDBCardImage src={reloj} alt='TURNOS ASIGNADOS' position='top' /></a></div>
        <MDBCardBody>
          <MDBCardTitle className='d-flex justify-content-center text-warning fw-bold'>TURNOS ASIGNADOS</MDBCardTitle>
          <MDBCardText className='d-flex justify-content-center'>
            Si desea saber los turnos asignados y la atención de ellos.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted d-flex justify-content-center fst-italic'>La opción que se adapta a vos</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
</div>
           </section>
        </>
    );
};

export default inicioComponent;