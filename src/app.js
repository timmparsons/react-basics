import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return <p>This is from header</p>
  };
}

const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Header />
    <Header />
  </div>
)

ReactDOM.render(jsx, document.getElementById("app"));