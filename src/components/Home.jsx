import React from "react";
import "./index.css";
import kkk from './kkk.jpg';
// import React,{useEffect} from "react";
console.log(kkk);


function Home() {
  
  return (
    <div class="alpha">
    <div>
      <div class="container">
        <div class="left1">
            <h1>Ministry Of Home Affairs</h1>
            <p>The Ministry of Home Affairs (MHA) discharges multifarious responsibilities, the important among them
                being - internal security, border management, Centre-State relations, administration of Union
                Territories, management of Central Armed Police Forces, disaster management, etc. Though in terms of
                Entries 1 and 2 of List II – ‘State List’ – in the Seventh Schedule to the Constitution of India,
                ‘public order’ and ‘police’ are the responsibilities of States, Article 355 of the Constitution enjoins
                the Union to protect every State against external aggression and internal disturbance and to ensure that
                the Government of every State is carried on in accordance with the provisions of the Constitution. In
                pursuance of these obligations, the Ministry of Home Affairs continuously monitors the internal security
                situation, issues appropriate advisories, shares intelligence inputs, extends manpower and financial
                support, guidance and expertise to the State Governments for maintenance of security, peace and harmony
                without encroaching upon the constitutional rights of the States.</p>
        </div>
       
        <div class="right6">
            <img src= {kkk} alt="kkk"/>;
        </div>
    </div>

    <button  class="home" type="button"><a href="/bot">CLICK ME</a></button> 
    </div>
    </div>
  )}



export default Home;
 