import React from 'react'
import '../Componentes/Clientes.css'
import TablaClientes from './TablaClientes';


class Clientes extends React.Component{
  
    render()
    {
        return (
           <>
            <div className='container'>
              <TablaClientes/>
            </div>
           </>
        )
    }
}

export default Clientes