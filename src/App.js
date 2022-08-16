import React from 'react';
import { getAuth, signInAnonymously } from "firebase/auth";
import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from './firebase';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {

  const login = () => {
    signInAnonymously(getAuth()).then(user=>console.log(user));
  }

  const activateMessage = async () => {
    const token = await getToken(messaging, {
      vapidKey: "BF7XJWXaQC-42wdUlxCGC7-EQ2_sj0Xt2Ir2BiklxP7mzSpdP8Az0Zlwrj6fDixEUV2wOvLSECnOwZjA-rpZI0c"
    }).catch(error => console.log(error));
    
    if (token) console.log("token is: ", token);
    if (!token) console.log("you not have token");
  }

  React.useEffect(() => {
    onMessage(messaging, message => {
      console.log('Your message: ', message)
      toast(message.notification.title);
    })
  }, []);

  return (
    <div> 
      <h1>Web Push Notification from GEMS</h1>
      <ToastContainer />
      <button onClick={login}> Login</button>
      <button onClick={activateMessage}> Recibir Token</button>
    </div>
    );
    
}

export default App;
