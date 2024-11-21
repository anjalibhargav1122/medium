import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import google from "../../assets/g.png";
import facebook from "../../assets/f.png";
import email from "../../assets/e.webp";

const Write = ({ openModal, handleClose, tex}) => {

    const btn = [
      {
        "text":"Sign up with Google",
        "img":google
      },
      {
        "text":"Sign up with Facebook",
        "img":facebook
      },
      {
        "text":"Sign up with email",
        "img":email
      }
    ];

    return (
        <div>
            <Modal show={openModal} onHide={handleClose}>
                <Modal.Header closeButton />
                <Modal.Body className='mod '>
                    <Modal.Title className='fs-4 mt-5 mb-5 pb-4 pt-2'>
                      {tex}
                    </Modal.Title>
                    {
                        btn.map((v, i) => (
                            <Button key={i} variant="" className='d-flex align-items-center mb-3 border border-dark rounded-pill w-75'>
                                <div className='widbtn me-5'>
                                    <img alt='img' className='w-100 h-100' src={v.img}/>
                                </div>
                                <span className='ms-4'>{v.text}</span>
                            </Button>
                        ))
                    }
                    <p className='mt-4 mb-5 pb-4'>
                        Already have an account? <span className='text-success fw-bold'>Sign in</span>
                    </p>
                    <p className='fsl text-center text-secondary mb-5 pb-5'>
                        Click “Sign up” to agree to Medium’s <a className='fsl text-secondary' href='#'>Terms of Service</a> and acknowledge that Medium’s <a className='fsl text-secondary' href='#'>Privacy Policy</a> applies to you.
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Write;
