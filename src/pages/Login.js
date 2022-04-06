import GoogleLogin from "react-google-login";
import React from "react";
import {useNavigate} from 'react-router-dom';
import data from '../data.json';

const Login = () => {
    const navigate = useNavigate();

    const onSuccess = (response) => {
        localStorage.setItem("user", JSON.stringify(response.profileObj));
        localStorage.setItem("data", JSON.stringify(data));
        navigate('/home')
    }
    
      const onFailure = (response) => {
        console.log(response);
      }

    return (
        <div>
        <GoogleLogin 
          clientId='337748633017-8otsdtp3isnbrjosmmash874ufrurvn9.apps.googleusercontent.com'
          buttonText='Log in with google'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
        />
        </div>
    )
}

export default Login;