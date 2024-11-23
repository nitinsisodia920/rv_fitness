import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Axios from 'axios'
import "./LoginScreen.css"
import { Store } from '../Store';
import { toast } from "react-toastify";
import { getError } from "../utils";
import login from './images/loginback.jpg'

const Login=()=>{

    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('') 

   const { state, dispatch: ctxDispatch } = useContext(Store);
   const { userInfo } = state;

   const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
        console.log('login start ', email, password);
        const { data }= await Axios.post('http://127.0.0.1:5000/api/users/login',{
            "email" : email,
            "password": password
        });

        ctxDispatch({ type: 'USER_SIGNIN', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate(redirect || '/');
        console.log('data is ', data) ;

    }catch(err){
        toast.error(getError(err));
    }

}

    useEffect(() => {
        if (userInfo) {
          navigate(redirect);
        }
      }, [navigate, redirect, userInfo]);
     

   return(
        
            <div className="container" id="l_c">
            
                <div class="form d-flex justify-content-between">

                    <div className="login-image" >
                        <figure>
                            {/* <img id="login_img" class="login_img" src={require("./login_img.png")} alt="login_img"/> */}
                        </figure> 
                    </div> 

                    <div class="card">
                        <div className="login-form" class="form">

                            <h3 className="form-title">Login into your account</h3><br/>

                            <form className="register-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div class="md-form md-outline">

                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}  required/>
                                            <label for="floatingInput">Email address</label>
                                        </div>

                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  required/>
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                        <br/>

                                        <button class="lgnbtn">Login</button>

                                    </div> 
                                </div>
                            </form>

                            <br/>
                            <Link to="/signup"className="signup-image-link">Do not have a account? Create one now!</Link> 

                        </div>
                    </div>
                </div>     
            </div>      
        
        
   ) 
}

export default Login