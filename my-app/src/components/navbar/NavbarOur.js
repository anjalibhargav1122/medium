import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import "./Navbar.css"
import Sign from '../model/Sign'
import Write from '../model/Common'

const NavbarOur = () => {
  
  const [showSign, setShowSign] = useState(false);
  const handleShowSign = () => setShowSign(true);
  const handleCloseSign = () => setShowSign(false);
  
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const handleShow = (tx) => {
    setText(tx)
    setShow(true)
};
const handleClose = () => setShow(false);
  return (
    <div>
      <Container className='bg-dark border-bottom border-white' fluid>
      <Container  fluid>
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand  ffor text-white" href="/">Medium</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
       
      </ul>
      <div class="d-flex">
        <button onClick={handleShowSign} class="btn border rounded-pill tx" type="submit">Sign in</button>
        <button onClick={() => handleShow("Join Medium.")} class="btn rounded-pill bttn ms-4" type="submit">Sign up</button>
      </div>
    </div>
  </div>
</nav>
        </Container>
      </Container>
      
      <Write openModal={show} handleClose={handleClose} tex={text} />
      <Sign openModal={showSign} handleClose={handleCloseSign} />
    </div>
  )
}

export default NavbarOur