import React, { useEffect, useRef } from "react";

import SalaryPage from "./pages/SalaryPage";
import AdmissionPage from "./pages/AdmissionPage";
import TextPage from "./pages/TextPage";
import Navigator from "./components/Navigator";
import WordCountPage from "./pages/WordCountPage";

import { Switch, Route } from "react-router-dom";

function App() {
  const app = useRef(0);
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    console.log(nav.offsetHeight);
    const navHeight = nav.offsetHeight;
    app.current.height = window.innerHeight - navHeight;
  }, []);
  return (
    <div>
      <Navigator />
      <div ref={app} className="App">
        <Switch>
          <Route exact path="/" component={SalaryPage} />
          <Route exact path="/salarypage" component={SalaryPage} />
          <Route exact path="/admissionpage" component={AdmissionPage} />
          <Route exact path="/textpage" component={TextPage} />
          <Route exact path="/wordcountpage" component={WordCountPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
