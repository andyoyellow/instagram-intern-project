let App = React.createClass({
  displayName: "App",
  render() {
    return (
      <div>
        App Content Goes Here
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById("app")
);
