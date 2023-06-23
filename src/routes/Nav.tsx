import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../assets/react.svg';
import { Read, Home, Delete, Update } from '../components';

interface IsActive {
  isActive: boolean;
}

const setActive = ({ isActive }: IsActive) => isActive ? 'nav-active' : '';

export const Nav = () => {

  
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={ logo } alt="React Logo" />

          <ul>
            <li>
              <NavLink to='/' className={ setActive }>Create</NavLink>
            </li>
            <li>
              <NavLink to='/read' className={ setActive }>Read</NavLink>
            </li>
            <li>
              <NavLink to='/update' className={ setActive }>Update</NavLink>
            </li>
            <li>
              <NavLink to='/delete' className={ setActive }>Delete</NavLink>
            </li>
          </ul>

        </nav>

        <Routes>
          <Route path='/read' element={ <Read /> }/>
          <Route path='/update' element={ <Update /> }/>
          <Route path='/delete' element={ <Delete /> }/>
          <Route path='/' element={ <Home /> }/>

          <Route path='/*' element={ <Navigate to='/' replace /> }/>
        </Routes>

      </div>
      
    </BrowserRouter>
  )
}