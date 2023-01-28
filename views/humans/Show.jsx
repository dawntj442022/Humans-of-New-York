const React = require("react");

class Show extends React.Component {
  render() {
    const human = this.props.human;

    return (
      <div>
        <h1>Blog Post</h1>
        <nav>
          <a href="/humans">Back</a>
        </nav>
        The {this.props.human.title} is {this.props.human.entry} {" - "}
        {this.props.human.postToPublic
          ? `It is posted to the public`
          : `It is not posted to the public`}
      </div>
    );
  }
}

module.exports = Show;
