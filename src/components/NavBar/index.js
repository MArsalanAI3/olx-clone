import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Icon from './Logos.png'
import Login from '../Login/Login'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand logo ml-5" href="#">
        <img src={Icon} />
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <div className="input-group input-group-lg location mr-4" >
            <input type="text" class="form-control" placeholder="Pakistan" />
            <div className="input-group-btn">
              <button className="fas fa-search ico"><FontAwesomeIcon icon={faSearch} />
              </button>

            </div>
          </div>

          <div className=" input-group input-group-lg search " >

            <input type="text" className="form-control " placeholder="Find Mobile,Car,laptop......." />
            <div className="input-group-btn ">
              <button className="fas fa-search ico" ><FontAwesomeIcon icon={faSearch} /></button>
            </div>
          </div>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <h6 className="mr-sm-2 login" ><Login />  </h6>
          <button className="my-2 my-sm-0 fas fa-plus sell">&nbsp; SELL</button>
        </form>
      </div>
    </nav>




  );
}

export default NavBar;










