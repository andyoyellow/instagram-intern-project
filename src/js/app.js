let posts = [
  { name: "Jay Z", avatar: "jayZ", timestamp: "1h", image: "warriors-parade", isFavorited: false },
  { name: "Beyonce", avatar: "beyonce", timestamp: "2h", image: "beach", isFavorited: false },
  { name: "Janelle", avatar: "janelle", timestamp: "3h", image: "water-color", isFavorited: false },
];

let CardHeader = React.createClass({
  displayName: "CardHeader",
  render() {
    return (
      <header className="df ff-row ff-vcenter jc-sb">
        <div className="df ff-row ff-vcenter">
          <img src={"assets/userAvatars/" + this.props.avatar + ".jpg"} alt="user photo" className="sq-50px ovf-hidden br-circle mas"/>
          <a href="#" className="helvetica blue-text">{this.props.name}</a>
        </div>
        <p className="helvetica grey-text">{this.props.timestamp}</p>
      </header>
    )
  }
});

let CardFooter = React.createClass({
  displayName: "CardFooter",
  render() {
    return (
      <footer className="df ff-row jc-sb">
        <div>
          <button className="fa fa-heart-o mas f2 grey-text">
            <span className="assistive-text">Favorite this post</span>
          </button>
          <button className="fa fa-comment-o mas f2 grey-text">
            <span className="assistive-text">Comment on this post</span>
          </button>
        </div>
        <button className="fa fa-ellipsis-h mas f2 grey-text">
          <span className="assistive-text">More options</span>
        </button>
      </footer>
    )
  }
});

let Card = React.createClass({
  displayName: "Card",
  render() {
    return (
      <div>
        <CardHeader name={this.props.post.name} avatar={this.props.post.avatar} timestamp={this.props.post.timestamp}/>
        <img src={"assets/postedPhotos/" + this.props.post.image + ".png"} alt={this.props.post.image} />
        <CardFooter />
      </div>
    )
  }
});

let App = React.createClass({
  displayName: "App",
  renderPosts(){
    /*
    //Creating an array of Card components
    let cards = [];
    //==========================================================
    //Iterating over posts array to populate Card components
    //==========================================================
    for(let i = 0; i < this.props.posts.length; i++){
      cards.push(<Card post={this.props.posts[i]} />);
    }
    //Because apparently Javascript requires that everything returns data (if you want to use it)
    return cards;
    */
    //==========================================================
    //functional alternative of for loop for Card components
    //maps data for posts from App component to Card components
    //==========================================================
    let cards = this.props.posts.map(function(currentPost) { return <Card post={currentPost} className="mw-350px"/>; });
    return cards;
  },
  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
});

React.render(
  <App posts={posts} />,
  document.getElementById("app")
);
