import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";
import Event from "./pages/landing-page";
import EventDetail from "./pages/event-detail";
import CreateEvent from "./pages/create-event";
import reportWebVitals from "./reportWebVitals";
import { AppContext } from "./store/events-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppContext>
      <Router>
        <Routes>
          <Route path="/" element={<Event />} />
          <Route path="/event" element={<EventDetail />} />
          <Route path="/create" element={<CreateEvent />} />
        </Routes>
      </Router>
    </AppContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
