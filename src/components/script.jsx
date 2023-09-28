import React, { useEffect } from 'react';
import { Container ,Row,Col} from 'react-bootstrap'

function TestBot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with Strikers",
        botConversationDescription: "This chatbot was built surprisingly fast with Botpress",
        botId: "aa817352-bc8d-4e4f-ab31-87769ed67a2c",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "aa817352-bc8d-4e4f-ab31-87769ed67a2c",
        lazySocket: true,
        botName: "Strikers",
        avatarUrl: "https://i.pinimg.com/750x/17/78/cb/1778cbe223c3e3fbea363114b0310b73.jpg",
        stylesheet: "https://webchat-styler-css.botpress.app/prod/code/32cbdf98-24b0-4f6f-be98-dcdfbb640047/v45754/style.css",
        frontendVersion: "v1",
        useSessionStorage: true
    });
      // window.botpressWebChat.init({
      //           botId: '7b5b44b9...........2383c0b5c',
      //           clientId: '7b5b44b9-..........bbb2383c0b5c',
      //           hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
      //           messagingUrl: 'https://messaging.botpress.cloud',
      //           botName: 'TicketBot',
      //           hideWidget: true,
      //           disableAnimations:false,
      //           stylesheet: 'https://style-.....a.vercel.app/bot.css',
      // });
                window.botpressWebChat.onEvent(() => {
                window.botpressWebChat.sendEvent({ type: 'show' });
            }, ['LIFECYCLE.LOADED']);
    }
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Container >
        <Row>
          <Col className="bg-light" lg={9}>
            <div id="bp-web-widget-container" />
          </Col>
          <Col className="bg-dark" lg={3} />
        </Row>
      </Container>
    </div>
  );
}

export default TestBot;