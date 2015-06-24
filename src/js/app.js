let posts = [
  { name: "Jay Z", avatar: "jayZ", timestamp: "1h", image: "warriors-parade", isFavorited: false },
  { name: "Beyonce", avatar: "beyonce", timestamp: "2h", image: "beach", isFavorited: false },
  { name: "Janelle", avatar: "janelle", timestamp: "3h", image: "water-color", isFavorited: false },
];


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
