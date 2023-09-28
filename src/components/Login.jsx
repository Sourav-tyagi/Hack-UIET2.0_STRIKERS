import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./login.css";
import tyagi  from './tyagi.jpg';



function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8090/api/v1/employee/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             // eslint-disable-next-line
             if (res.data.message == "Email not exits") 
             {
               alert("Email not exits");
             } 
             // eslint-disable-next-line
             else if(res.data.message == "Login Success")
             { 
                
                navigate('/Home');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }

    return (


      <div class="body">
        



       <div class="civa">
         <img src= {tyagi} alt="kkk"/>

       </div>

       <div class="diva">
          <div class="containerss">
            <div class="row10">
                <h4>Login</h4>
             </div>

           

            <div class="row2">
               <div class="col-sm-6">
 
                  <form>
                      <div class="form-group">
                       

                                  <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
                                   value={email}
                                   onChange={(event) => {
                                   setEmail(event.target.value);
                                   }}
          
                                  />

                      </div>

                      <div class="form-group1">
                       
                        
                           <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
                             value={password}
                               onChange={(event) => {
                                 setPassword(event.target.value);
                                   }}
            
                            />
                      </div>

                      <div class="loginn">
                       

                         <div class="y">
                          <p> Don't have an account ? <a href="./register"> Register</a></p>
                           

                         </div>
                         <div class="x">

                            { <button  type="submit" class="btn btn-primary" onClick={login} ><h2>Login</h2></button> }

                        </div>
                        

                      </div>
                       
                </form>

            </div>
            </div>
            </div>

       </div>
     </div>
    );
  }
  
  export default Login;
