import { useState } from "react";
import axios from "axios";
import "./register.css";
import tyagi  from './tyagi.jpg';


function Register() {

  const [employeename, setEmployeename] = useState("");
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8090/api/v1/employee/save", {
        employeename: employeename,
        username: username,
        email: email,
        password: password,
      });
      alert("Employee Registation Successfully");

    } catch (err) {
      alert(err);
    }
  }

  return (

    <div class="body">
       <div class="civa">
         <img src= {tyagi} alt="kkk"/>

       </div>

       <div class="diva">
       
          <div class="card">
            <div class="kg">
                <h1> Registation</h1>
            </div>
            

            <form>
              <div class="form-groupx axa">
               
                <input type="text" class="form-control" id="employeename" placeholder="Full Name"

                  value={employeename}
                  onChange={(event) => {
                    setEmployeename(event.target.value);
                  }}
                />

              </div>

              <div class="form-group2 axa">
               
                <input type="text" class="form-control" id="username" placeholder="Enter userName"

                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />

              </div>

              <div class="form-group3 axa">
               
                <input type="email" class="form-control" id="email" placeholder="Enter Email"

                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}

                />

              </div>

              <div class="form-group4 axa">
              
                <input type="password" class="form-control" id="password" placeholder="Enter password"

                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}

                />
              </div>
              <div id="unique">
                    <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>

              </div>

              <div class="y">
                          <p>Already have an account ? <a href="./login"> Login</a></p>
                           

               </div>
            

            </form>
          </div>
        </div>
      </div>
  

  );
}

export default Register;
