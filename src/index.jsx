import * as ReactDOMClient from "react-dom/client";
import GhibliApp from "./Ghibli";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(<GhibliApp />);

reportWebVitals();
