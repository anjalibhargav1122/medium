import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import "./Navbar.css";
import Write from '../model/Common';
import Sign from '../model/Sign';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [showSign, setShowSign] = useState(false);

    const [text, setText] = useState("");

    const handleClose = () => setShow(false);
    const handleCloseSign = () => setShowSign(false);
    
    const handleShow = (tx) => {
        setText(tx)
        setShow(true)
    };
    const handleShowSign = () => setShowSign(true);

    return (
        <div>
            <Container fluid className='bgnav border-bottom border-dark'>
                <Container>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand fs-2 fw-bold ff" href="#">Medium</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                      <NavLink className="text-decoration-none" to="/ourstory">  <a className="nav-link active fmy dn" aria-current="page" href="#">Our story</a></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="text-decoration-none" to="/membership">
                                        <a className="nav-link fmy dn" href="#">Membership</a></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-3 fmy dn" onClick={() => handleShow("Create an account to start writing.")} href="#" tabIndex="-1" aria-disabled="true">Write</a>
                                    </li>
                                </ul>
                                <form className="d-flex align-items-center">
                                    <a href='#' onClick={handleShowSign} className='fmy text-decoration-none text-dark dn'>Sign in</a>
                                    <button className="btn btn-dark rounded-pill fmy ms-4 ps-3 pe-3" type="button" onClick={() => handleShow("Join Medium.")} >Get started</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </Container>
            </Container>

            <Write openModal={show} handleClose={handleClose} tex={text} />
            <Sign openModal={showSign} handleClose={handleCloseSign} />
        </div>
    );
}

export default Navbar;
