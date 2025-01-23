/* ****************************************************************************************************************
The code will use the Amplify Authenticator component to scaffold out an entire user authentication flow allowing 
users to sign up, sign in, reset their password, and confirm sign-in for multifactor authentication (MFA).
**************************************************************************************************************** */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authenticator } from "@aws-amplify/ui-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);