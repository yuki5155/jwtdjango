import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {useCookies } from 'react-cookie';
import  { useHistory } from 'react-router-dom';


function Home() {
    const [cookies, setCookie] = useCookies(['auth']);
    const apiUrl = 'http://localhost:8000'
    const token = cookies.accesstoken;
    const history = useHistory();

    useEffect(() => {
        axios.get(`${apiUrl}`,{
          
          headers: {
              'Content-Type': 'application/json',
              "authorization": `JWT ${token}`,
              
              
          }
        },
        )
        
          .then(
            
            response =>{
              
            
            
            },
            
            error =>{
              
              if(error.response.status === 401){
                console.log('401エラーです');
                history.push('/login');
              }
            }
          )
          
      }, [])

  



 
    return (
      
        <>
            <p>sggassss</p>

           
    


        </>

        
        
        
    );
  }
  
  export default Home;

