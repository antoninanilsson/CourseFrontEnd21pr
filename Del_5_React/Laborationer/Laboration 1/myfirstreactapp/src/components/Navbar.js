import React from 'react'
// vi skickar namn till navbar, funktion login och objekt reader
const Navbar = ({title,login,reader}) => {
    

   
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top mt-3">
        <div className="container-fluid mx-2">
            <a className="navbar-brand" href="/#">{title}</a>
               

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/#">Features</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/#">Pricing</a>
                </li>
                <li className="nav-item">
                  <button type="button" className="nav-link active btn shadow-none" onClick={login}> {  reader.loggedIn ? reader.name:"Logga in" }</button>                  
                </li>
 
            </ul>

            </div>
            
  </div>
</nav>
    )
}

export default Navbar
