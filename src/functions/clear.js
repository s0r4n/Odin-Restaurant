import navbar from "./navbar";
import "../styles/navbar.css";

function clear() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(myNode.lastChild);
      }
    navbar();
}

export default clear;