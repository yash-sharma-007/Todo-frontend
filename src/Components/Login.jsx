import React, { useContext, useState } from 'react';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBIcon}from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Context,server } from '../index';


export const Login = ()=>{
  const {user,setuser} =useContext(Context);
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const navigate=useNavigate();
  const LoginHandler = async (e) => {
    e.preventDefault();
   
    try {
      const response = await fetch(`${server}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    });
    const data=await response.json();
    
    if(data.success){
        localStorage.setItem('token',data.token)
        setuser(data.user)
        localStorage.setItem('token',data.token);
        localStorage.setItem('user',user.name);   
        console.log(localStorage.getItem('user'))
        toast.success(data.message);
        navigate('/profile')
      }
      else{
        toast.error(data.message);
      }
     
    } catch (error) {
      toast.error("Internal error");
    }
  };
    return (

      <form  >

              <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
              <MDBCol col='12'>

                <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                  <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' className='formControlLg' onChange={(e)=>{setemail(e.target.value)}} type='email' size="lg"/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' className='formControlLg' onChange={(e)=>{setpassword(e.target.value)}} type='password' size="lg"/>

                    <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                  
                  <button onClick={LoginHandler}  type='submit' className='mb-4 btn btn-primary' size='lg'>Login</button>
                    <div className='d-flex flex-row mt-3 mb-5'>
                      <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='facebook-f' size="lg"/>
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='twitter' size="lg"/>
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='google' size="lg"/>
                      </MDBBtn>
                    </div>

                    <div>
                      <p className="mb-0">Don't have an account? <Link to={'/register'} className="text-white-50 fw-bold">Register</Link></p>

                    </div>
                  </MDBCardBody>
                </MDBCard>

              </MDBCol>
            </MDBRow>

          </MDBContainer>
      </form>
    );
};