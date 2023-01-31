const React = require("react");
const Moment = require("moment");

class Show extends React.Component {
  render() {
    const human = this.props.human;

    return (
      <div>
        <h1>Blog Post</h1>
        <nav>
          <a href="/humans">Back</a>
        </nav>
        {this.props.human.title}. {this.props.human.entry} {" - "}
        {this.props.human.postToPublic
          ? `Posted to the public`
          : `Not posted to the public`}
        {Moment(human.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
      </div>
    );
  }
}

module.exports = Show;
