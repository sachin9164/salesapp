import React from 'react'
import logo from "../assets/logo.png"
function Header() {
    return (
        <div className="header">
             <section>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                
              <a className="navbar-brand" href="#"><img src={logo} width="220" alt=""></img></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
               <div className="">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll " style={{height: '100px'}}>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Buy Propeties</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Sell My Properties</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Condons</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Case Studies</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Contact</a>
                      </li>
                      <li className="nav-item">
                       
                         <div className="heart">
                       
                    </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <button type="button" className="btn btn-light">SEARCH PROPERTIES</button>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            
                            <span className="navbar-toggler-icon"></span>
                        </a>
                      </li>

                  </ul>
               </div>
              
              </div>
            </div>
          </nav>
    </section>
        </div>
    )
}

export default Header
