import React from 'react';
const ErrorMessage = ({ message }) => {
    return ( 
    <p className="alert alert-danger error">{message}</p>
     );
}
 
export default ErrorMessage;