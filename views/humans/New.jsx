const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Blog Post</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/humans" method="POST">
          Title: <input type="text" name="title" />
          <br />
          Entry: <input type="textarea" name="entry" />
          <br />
          Ship is Broken: <input type="checkbox" name="postToPublic " />
          <br />
          <input type="submit" name="" value="Create Blog" />
          <br />
        </form>
      </div>
    );
  }
}

module.exports = New;
