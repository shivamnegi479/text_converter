import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from './About';
import Alert from "./Alert";
import Navbar from "./navbar";
import TextForm from "./TextForm";

const Main = () => {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null)
  const showAlert= (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const togllemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#fff";
      document.getElementById("mybox").style.background = "#212529";
      document.getElementById("mybox").style.color = "#fff";
      showAlert('Dark mode has been enabled','success')
      
    setInterval(() => {
      document.title="Mywebs - Dark Mode"
    }, 1000);
    setInterval(() => {
      document.title="Mywebs - light Mode"
    }, 750);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      document.getElementById("mybox").style.background = "#fff";
      document.getElementById("mybox").style.color = "#000";
      showAlert('Light mode has been enabled','success')
      document.title="Mywebs - Light Mode "
    }
  }

  const greenToggle=()=>{
    if (mode === "light") {
      setmode("info");
      document.body.style.backgroundColor = "#39b9dc";
      document.body.style.color = "#fff";
      document.getElementById("mybox").style.background = "#39b9dc";
      document.getElementById("mybox").style.color = "#fff";
      showAlert('Dark mode has been enabled','success')
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      document.getElementById("mybox").style.background = "#fff";
      document.getElementById("mybox").style.color = "#000";
      showAlert('Light mode has been enabled','success')
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title="MyWebs" mode={mode} toggleMode={togllemode} greenToggle={greenToggle}  />
      <Alert myalert={alert} />
   


      <Switch>
          <Route exact path="/about">
            <About mode={mode} toggleMode={togllemode}  />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={togllemode}  showalert={showAlert}/>
          </Route>
        </Switch>
        </Router>
    </>
  );
};
export default Main;
