import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import "./index.css";

import { Redirect, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <div className="bg-[#1D1D1D] dark:bg-black w-screen h-screen">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
          </Switch>
        </div>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default App;
