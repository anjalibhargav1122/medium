import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import "./Pages.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic from "../assets/pic.webp"
import Footer from '../components/footer/Footer';
import Write from '../components/model/Common';

const Main = () => {
  const [show, setShow] = useState(false);

  const [text, setText] = useState("");

  const handleClose = () => setShow(false);
  
  const handleShow = (tx) => {
      setText(tx)
      setShow(true)
  };
  return (
    <div>
      <Navbar />
      <Container fluid className='border-bottom border-dark bgnav '>
        <Row>
          <Col sm={12} md={6} lg={6} className='ps-5 pt-5 pdb'>
            <h1 className=' fsz ms-4 mt-5'>Human<br />
              stories & ideas</h1>
            <p className='fs-5 mt-5 ms-4'>A place to read, write, and deepen your understanding</p>

            <button onClick={() => handleShow("Join Medium.")} class="btn btn-dark rounded-pill fw-bold ms-4 ps-5 mt-4 p-3 pe-5 bgclr" type="submit">Start reading</button>
          </Col><Col sm={12} md={6} lg={6}><img className='w-100 ht dn' alt='pic' src={pic} /></Col>
        </Row>
      </Container>
      <Footer />
      
      <Write openModal={show} handleClose={handleClose} tex={text} />
    </div>


  )
}

export default Main