"use strict";

var App = React.createClass({
  displayName: "App",
  render: function render() {
    return React.createElement(
      "div",
      null,
      "App Content Goes Here"
    );
  }
});

React.render(React.createElement(App, null), document.getElementById("app"));