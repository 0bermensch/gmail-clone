import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import EmailList from "./components/EmailList";
import { useSelector } from "react-redux";

import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
