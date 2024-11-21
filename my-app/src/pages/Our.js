import React, { useState } from 'react'
import NavbarOur from '../components/navbar/NavbarOur'
import FooterOur from '../components/footer/FooterOur'
import Container from 'react-bootstrap/Container'
import "./Pages.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import Write from '../components/model/Common'
import Sign from '../components/model/Sign'
import { Link } from 'react-router-dom'

const Our = () => {
  const text = [
    {
      "tex": "We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging."
    },
    {
      "tex": "Over 100 million people connect and share their wisdom on Medium every month. They’re software developers, amateur novelists, product designers, CEOs, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too."
    },
    {
      "tex": "Instead of selling ads or selling your data, we’re supported by a growing community of over a million Medium members who believe in our mission. If you’re new here, start reading. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then write your story."
    }
  ]
  const [show, setShow] = useState(false);
  const [tex, setText] = useState("");
  const handleShow = (tx) => {
    setText(tx)
    setShow(true)
};
const handleClose = () => setShow(false);


const [showSign, setShowSign] = useState(false);
const handleShowSign = () => setShowSign(true);
const handleCloseSign = () => setShowSign(false);
  return (
    <div>
      <NavbarOur />

      <Container fluid className='bg-dark text-white pt-5 pb-5 ps-5'>
        <h1 className='dis mt-5 pt-5'>Everyone has a<br /> story to tell</h1>
        <h6 className='of mt-5 pt-4'>Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without having to build a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right readers for whatever you have to say.</h6>
        <h3 className='wu mt-5 mb-5'><mark className='bg-mk'>Ultimately, our goal is to deepen our collective</mark> <mark className='bg-mk'>understanding of the world through the power of</mark> <mark className='bg-mk'>writing.</mark></h3>

        {
          text.map((v, i) => {
            return (
              <h6 className={i === 2 ? 'of mb-5 pb-5' : 'of mb-5 '}>{v.tex}</h6>
            )
          })
        }
      </Container>

      <Container onClick={() => handleShow("Join Medium.")}  fluid className='bg-dark hob border-top border-bottom border-white p-5 text-white d-flex align-items-center justify-content-between '>
        <p className='display-2  fp'>Start reading</p><FaLongArrowAltRight className='display-2 ' />
      </Container>
      <Container onClick={handleShowSign} fluid className='bg-dark hob  border-bottom border-white p-5 text-white d-flex align-items-center justify-content-between '>
        <p className='display-2  fp'>Start writing</p><FaLongArrowAltRight className='display-2 ' />
      </Container>
    <Link to="/membership#member" className='text-decoration-none'>  <Container fluid className='bg-dark hob     p-5 text-white d-flex align-items-center justify-content-between '>
        <p className='display-2  fp'>Become a member</p><FaLongArrowAltRight className='display-2 ' />
      </Container></Link>
   <FooterOur/>
   
   <Write openModal={show} handleClose={handleClose} tex={tex} />
   <Sign openModal={showSign} handleClose={handleCloseSign} />
    </div>
  )
}

export default Our