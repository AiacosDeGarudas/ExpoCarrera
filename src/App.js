
import './App.css';
import Main from './Componentes/Main';
import NavbarMain from './Layouts/NavbarMain';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import User from './Componentes/User';
import Clientes from './Componentes/Clientes';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavbarMain />}>
            <Route path='Main' element={<Main/> } />
            <Route path='User' element={<User/> } />
            <Route path='Clientes' element={<Clientes/> } />
            <Route path='*' element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
