import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Bot from "./components/Bot";
// import window.botpressWebChat.init from "./javascript";



function App() {


  
  return (
    <div >

      <BrowserRouter>
            <Routes>
              <Route path="/" element= { <Welcome/>} />
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/login" element= { <Login/>} />
              <Route path="/Bot" element= { <Bot/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}
export default App;

{/* <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>

function window.botpressWebChat.init({
      "composerPlaceholder": "Chat with Strikers",
      "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
      "botId": "aa817352-bc8d-4e4f-ab31-87769ed67a2c",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "aa817352-bc8d-4e4f-ab31-87769ed67a2c",
      "lazySocket": true,
      "botName": "Strikers",
      "avatarUrl": "https://i.pinimg.com/750x/17/78/cb/1778cbe223c3e3fbea363114b0310b73.jpg",
      "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/32cbdf98-24b0-4f6f-be98-dcdfbb640047/v45754/style.css",
      "frontendVersion": "v1",
      "useSessionStorage": true
  }); */}
