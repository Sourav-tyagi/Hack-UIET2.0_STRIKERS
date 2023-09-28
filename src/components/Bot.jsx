// import React from "react";
import "./Bot.css";
import strikers from './STRIKERS.png'

import React,{useEffect} from "react"


import state from './state.jpg';
import inter from './internal-security-division.jpg';

function Bot() {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId:  'aa817352-bc8d-4e4f-ab31-87769ed67a2c',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'aa817352-bc8d-4e4f-ab31-87769ed67a2c',
        stylesheet: 'https://webchat-styler-css.botpress.app/prod/code/32cbdf98-24b0-4f6f-be98-dcdfbb640047/v45754/style.css',
        botName: 'Strikers',
        avatarUrl: 'https://i.pinimg.com/750x/17/78/cb/1778cbe223c3e3fbea363114b0310b73.jpg',
        botConversationDescription: 'This chatbot was built by UIET-MDU',
      })
    }
  }, )

 // useEffect(() => 
  //   const script = document.createElement('script')
  //   script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
  //   script.async = true
  //   document.body.appendChild(script)
 
  //   script.onload = () => {
  //     window.botpressWebChat.init({
  //       botId: 'aa817352-bc8d-4e4f-ab31-87769ed67a2c',
  //       hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
  //       messagingUrl: 'https://messaging.botpress.cloud',
  //       clientId: 'aa817352-bc8d-4e4f-ab31-87769ed67a2c',
  //       stylesheet: 'https://webchat-styler-css.botpress.app/prod/code/32cbdf98-24b0-4f6f-be98-dcdfbb640047/v45754/style.css',
  //       botName: 'Strikers',
  //       avatarUrl: 'https://i.pinimg.com/750x/17/78/cb/1778cbe223c3e3fbea363114b0310b73.jpg',
  //       botConversationDescription: 'This chatbot was built surprisingly fast with Botpress',
  //     })
  //   }
  // }, )

  return (
    <div id="bot">
          <nav id="#nav">
        <div id="nav-img">
           <img src= {strikers} alt="kkk"/>
        </div>
        <div id="heading">
          <h2 id="H"><a href="welcome.html">Home</a></h2>
          <h2 id="A"><a href="#about-section">About</a></h2>
          <h2 id="C"><a href="#contact">Contact</a></h2>
          <h2 id="E"><a href="#team">Team</a></h2>
        </div>
        <div id="btn"><a href="./">Logout</a></div>
      </nav>
      <div class="container">
        <img src={state} alt="kkk" class="image" />
        <div class="text">

          <h1>State Department</h1>
          <p>In India, the term "Department of State" is not commonly used to refer to government agencies. Instead,
            the Indian government is organized into various ministries and departments that oversee different
            aspects of governance. These ministries and departments are responsible for formulating policies,
            implementing government programs, and managing specific sectors or areas of administration</p>
        </div>

        
        <div class="kholi sharma">
            <h3><span>FAQ'S</span></h3>
        </div>
      </div>




      <section>

        <div class="container">
        
          <div class="text">

            <h1>Internal Security Department</h1>
            <p>Department of Internal Security, dealing with the Indian Police Service, Central Police Forces,
              internal security and law & order,insurgency, terrorism, Naxalism, activities of inimical foreign
              agencies, terrorist financing, rehabilitation, grant of visa and other immigration matters, security
              clearances,"Protection of Human Rights Act and also matters relating to National integration and
              Communal Harmony and Ayodhya", etc</p>
          </div>

          <div class="kholi virat">

            <h3><span>FAQ'S</span></h3>

        </div>
          <img src={inter} alt="kkk" class="image10" />



        

        </div>





      </section>

    </div>



  )
}


export default Bot;
