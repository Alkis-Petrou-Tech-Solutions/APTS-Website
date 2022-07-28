import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import APTSShortVersion from "./components/APTSShortVersion";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|apts-short-version)">
          <APTSShortVersion {...aPTSShortVersionData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const aPTSShortVersionData = {
  logo: "/img/logo@2x.png",
  overlapGroup: "/img/first-frame-background@1x.png",
  spanText1: "Software Services ",
  spanText2: "and IT Solutions for Businesses.",
  getInTouch: "Get In Touch",
  about: "About",
  services: "Services",
  loremIpsumDolorSi:
    "Here at APTS we specialize in high quality software engineering. Our team is well versed with each stage of the software development lifecyle.",
  itConsultancy: "It Consultancy",
  infrastructureEngineering: "Infrastructure Engineering",
  softwareEngineering: "Software Engineering",
  x2022AlkisPetrou:
    "© 2022 Alkis Petrou Tech Solutions LTD | Company number: 13605947 | VAT Registration: 392604389",
};
