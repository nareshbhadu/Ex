import React from "react";
import ReactDom from "react-dom";

const page = (
  <div>
    <h1>My awsome website in React</h1>
    <h3>Reason I love react</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declerative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
)
document.getElementById('root').append(JSON.stringify(page))
