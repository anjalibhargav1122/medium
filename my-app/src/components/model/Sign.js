import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import google from "../../assets/g.png";
import facebook from "../../assets/f.png";
import apple from "../../assets/images.png";
import twitter from "../../assets/t.png";
import email from "../../assets/e.webp";

const Sign = ({ openModal, handleClose}) => {

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
        "text":"Sign in with Apple",
        "img":apple
      },
      {
        "text":"Sign in with X",
        "img":twitter
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
                    Welcome back.
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
                    No account?  <span className='text-success fw-bold'>Create one</span>
                    </p> <p className='fsl text-center text-secondary mb-5 '>
                    Forgot email or trouble signing in? Get help.
                    </p>
                    <p className='fsl text-center text-secondary mb-5 pb-5'>
                        Click “Sign up” to agree to Medium’s <a className='fsl text-secondary' href='#'>Terms of Service</a> and acknowledge that Medium’s <a className='fsl text-secondary' href='#'>Privacy Policy</a> applies to you.
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Sign;
