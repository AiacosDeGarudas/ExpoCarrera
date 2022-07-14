import React from 'react'
import { ModalBody, Modal,ModalHeader } from 'react-bootstrap'
import { FormGroup, ModalFooter, Button } from 'reactstrap'
import './TablaClientes.css'

const bdClientes=
[
  {
    id:'1', 
    apellido:'Quinteros',
    nombre:'Camila',
    direccion:'Moreno 890', 
    localidad:'J. POsse', 
    cpostal:'2553',
    telefono:'35375000145',
    dni:'33309011',
    edad:'34',
    fnacimiento:'19/04/1988',
    empleador:'Alimentos Magros S.A',
    obrasocial:'Avalian',
    cargofamiliar:'Titular',
    estadocuenta:'Activo',
  }
]


class TablaClientes extends React.Component{
  state=
  {
    datosCliente:bdClientes,
    form:
    {
      id:'',
      apellido:'',
      nombre:'',
      direccion:''
    }
    
  }
  
  //Funcion crear datos
  
  crearDatosCliente=(datosCliente)=>{}
  crearUpdateCliente=(datosCliente)=>{}
  crearDeleteCliente=(datosCliente)=>{}

  render(){
  return (
    <>
        <div className='cointainer'>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregarCliente">Insertar Afiliado +</button>
        <table className="table table-hover">
            <thead>
              <tr>
                <th>Nro Cuenta</th>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Localidad</th>
                <th>C.Postal</th>
                <th>Telefono</th>
                <th>DNI</th>
                <th>Edad</th>
                <th>F.Nacimiento</th>
                <th>Empleador</th>
                <th>Obra Social</th>
                <th>Cargo</th>
                <th>Estado Cuenta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
            {this.state.datosCliente.map((elemento)=>(    
              <tr>
                <th>{elemento.id}</th>
                <th>{elemento.apellido}</th>
                <th>{elemento.nombre}</th>
                <th>{elemento.direccion}</th>
                <th>{elemento.localidad}</th>
                <th>{elemento.cpostal}</th>
                <th>{elemento.telefono}</th>
                <th>{elemento.dni}</th>
                <th>{elemento.edad}</th>
                <th>{elemento.fnacimiento}</th>
                <th>{elemento.empleador}</th>
                <th>{elemento.obrasocial}</th>
                <th>{elemento.cargofamiliar}</th>
                <th>{elemento.estadocuenta}</th>
                <th>
                  <div class="d-grid gap-2 d-md-block">
                    <button class="btn btn-info text-white" type="button">Editar</button>{" "}
                    <button class="btn btn-danger" type="button">Eliminar</button>
                  </div>
                </th>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div class="modal fade" id="modalAgregarCliente" tabindex="-1" aria-labelledby="modalAgregarClienteLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalAgregarClienteLabel">Crear nuevo afiliado</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <div class="mb-3">
                <label for="labelNroCuenta" class="form-label">Nro Cuenta</label>
                <input type="email" class="form-control" name='id' id="labelNroCuenta" readOnly value={this.state.datosCliente.length+1}/>
              </div>
              <div class="mb-3">
                <label for="labelApellido" class="form-label">Apellido</label>
                <input class="form-control" type="text" name='apellido' placeholder="Ingresa el apellido" aria-label="Apellido" />
              </div>
              <div class="mb-3">
                <label for="labelNombre" class="form-label">Nombre</label>
                <input class="form-control" type="text" name='nombre' placeholder="Ingresa el nombre" aria-label="Nombre"/>
              </div>
              <div class="mb-3">
                <label for="labelDireccion" class="form-label">Direccion</label>
                <input class="form-control" type="text" name='direccion' placeholder="Ingresa la direccion" aria-label="Direccion"/>
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>      
    </>
  )
}
}

export default TablaClientes