import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useForm } from "react-hook-form";
import  { useHistory } from 'react-router-dom';


function Login() {
    const apiUrl = 'http://localhost:8000'
    const history = useHistory();

    const [cookies, setCookie] = useCookies();
    const { register, handleSubmit, watch, errors } = useForm();

    const getJwt = async (data) =>{
        console.log(data)
        await axios.post(`${apiUrl}/token/obtain/`,
        {
          
        
          username:data.userid,
          password:data.password,
          
    
        },
    
        
        )
        .then(function (response) {

            console.log(response.data.access)
          
        

          setCookie('accesstoken', response.data.access, { path: '/' });
          setCookie('refreshtoken', response.data.refresh, { path: '/' });

          history.push('/');
          

    
        })
        
        
      };

  



 
    return (
      
        <>
            <p>sggassss</p>

            <form onSubmit={handleSubmit(getJwt)}>
            <input className='form-control' name="userid" ref={register} />
            <input className='form-control' name="password"　type="password" ref={register({ required: true })} />
            <input className='btn btn-secondary' type="submit" value="ログイン" />

            </form>

           
    


        </>

        
        
        
    );
  }
  
  export default Login;