import React from 'react';
import './Navbar.css';
import userAccountImage from '../IMG/Account.png';

export function Navbar() {
  return (
    <div className='container'>
    <nav className="navbar navbar-expand-lg">
      <div className="d-flex col-10 text-center">
        <a className="navbar-brand col-lg-2" href="/home">MUVEMI</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item navyazi">
              <a href="#Filmler" className="btn">Filmler</a>
            </li>
            <li className="nav-item navyazi">
              <a href="#Diziler" className="btn">Diziler</a>
            </li>
            <li className="nav-item navyazi">
              <a href="#Kişiler" className="btn">Kişiler</a>
            </li>
            <li className="nav-item fazla">
              <a href="#Dahafazla" className="btn">Daha fazla+</a>
            </li>
          </ul>
        </div>
      </div>

      <button type="button" className="btn btn-outline-secondary btn-sm">EN</button>

      <div className="User p-1">
        <div className="username">
          <div>Serkan Konakci</div>
        </div>
        <div className="userjob">
          <div>FrontEnd developer</div>
        </div>
      </div>

      <img src={userAccountImage} alt="User Account" />
    </nav>
    </div>
  );
}

export default Navbar;