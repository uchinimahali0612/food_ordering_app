import React from 'react';
import { useRouteError } from 'react-router-dom';

const CustomError = () => {
    const error=useRouteError();
    console.log("error", error)

  return (
 <div className='container error-part alert alert-danger alert'>
    <div><img src="https://img.freepik.com/premium-vector/404-error-web-template-with-angry-cat_197582-246.jpg"></img></div>
    <div> <b>{error?.data}</b></div>
    <div><b>Error Status: </b> {error?.status}</div>
    <div><b>Error Description:</b> {error?.statusText}</div>

 </div>   
    

  )
}

export default CustomError;