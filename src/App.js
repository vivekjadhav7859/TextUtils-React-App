import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React from "react";
import { BrowserRouter as Router,withRouter, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
        <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Switch>
              <Route exact path="/about" component={withRouter(About)}>
                <About mode={mode} />
              </Route>
              <Route exact path="/">
                <TextForm
                  heading="Enter your text to Analyze"
                  showAlert={showAlert}
                  mode={mode}
                />
              </Route>
            </Switch>
          </div>
        </Router>

    </>
  );
}

export default App;
