import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Modal from 'react-modal';

Modal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Router>
    <App />
  </Router>
);
