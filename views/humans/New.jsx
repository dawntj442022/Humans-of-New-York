const React = require("react");
const DefaultLayout = require("../Layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          <h1 className="text-red-700">Blog Post</h1>
          {/* NOTE: action will be the route, method will be the HTTP verb */}
          <form action="/humans" method="POST">
            Title: <input type="text" name="title" />
            <br />
            Entry: <input type="textarea" name="entry" />
            <br />
            Post to Public: <input type="checkbox" name="postToPublic" />
            <br />
            <input type="date" name="" value="Create Date" />
            <br />
            <input type="submit" name="" value="Create Blog" />
            <br />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;
