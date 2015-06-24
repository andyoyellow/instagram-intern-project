let posts = [
  { name: "Jay Z", avatar: "jayZ", timestamp: "1h", image: "warriors-parade", isFavorited: false },
  { name: "Beyonce", avatar: "beyonce", timestamp: "2h", image: "beach", isFavorited: false },
  { name: "Janelle", avatar: "janelle", timestamp: "3h", image: "water-color", isFavorited: false },
];

let CardHeader = React.createClass({
  displayName: "CardHeader",
  render() {
    <p>Card Header</p>
  
  }
});

let CardFooter = React.createClass({
  displayName: "CardFooter",
  render() {
    <p> Card Footer </p>
  }
});

let Card = React.createClass({
  displayName: "Card",
  render() {
    <div>
      <CardHeader />
      <CardFooter />
    </div>
  }
});

let App = React.createClass({
  displayName: "App",
  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
});


React.render(
  <App />,
  document.getElementById("app")
);
