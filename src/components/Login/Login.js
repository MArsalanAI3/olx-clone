import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import LoginCarousel from '../Carousel/Carousel';
import LoginButton from '../buttons/Button'
import './Login.css';
const Login = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Login</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} charCode="X" className='modalbtn'></ModalHeader>
        <ModalBody>
          <LoginCarousel />
           <LoginButton text='Continue with Email'  />
           <LoginButton text='Continue with google'  />
           <LoginButton text='Continue with Facebook'  />
           <LoginButton text='Continue with Github'  />
           <span className='text-center detailMsg'>We won't share your personal details with anyone</span>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;