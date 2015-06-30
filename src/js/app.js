let posts = [
  { name: "Jay Z", avatar: "jayZ", timestamp: "1h", image: "warriors-parade", isFavorited: false },
  { name: "Beyonce", avatar: "beyonce", timestamp: "2h", image: "beach", isFavorited: false },
  { name: "Janelle", avatar: "janelle", timestamp: "3h", image: "water-color", isFavorited: false },
];

let CardHeader = React.createClass({
  displayName: "CardHeader",
  render() {
    return (
      <p>Card Header</p>
    )
  }
});

let CardFooter = React.createClass({
  displayName: "CardFooter",
  render() {
    return (
      <p> Card Footer </p>
    )
  }
});

let Card = React.createClass({
  displayName: "Card",
  render() {
    return (
      <div>
        <CardHeader />
        <CardFooter />
      </div>
    )
  }
});

let App = React.createClass({
  displayName: "App",
  render() {
    return (
      <Card />
    );
  }
});


React.render(
  <App />,
  document.getElementById("app")
);
