/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBInput,MDBIcon,MDBCheckbox}from 'mdb-react-ui-kit';
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { server } from '../index';

export const Register =() => {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const navigate=useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${server}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:name,email: email, password: password})
    });
      const data=await response.json();
      if(data.success){
        toast.success(data.message);
        navigate('/login')
      }
      else{
        toast.success(data.message);
      }
     
    } catch (error) {
      toast.error("Internal error...");
    }
  };

  return (
    <form onSubmit={submitHandler} >

      <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput onChange={(e)=>{setname(e.target.value)}} value={name} name='name' label='Your Name' id='form1' type='text' className='w-100'required />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput onChange={(e)=>{setemail(e.target.value)}} value={email} name='email' label='Your Email' id='form2' type='email'required />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput onChange={(e)=>{setpassword(e.target.value)}} value={password} name='password' label='Password' id='form3' type='password'required />
                </div>

                

                <button type='submit' className='mb-4 btn btn-primary' size='lg'>Register</button>

              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>

            </MDBRow>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>
    </form>
  );
}

