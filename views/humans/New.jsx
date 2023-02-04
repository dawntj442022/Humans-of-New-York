const React = require("react");
const DefaultLayout = require("../Layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          <h1 className="font-extrabold text-blue-500 text-center text-3xl">
            Humans of New York
          </h1>
          <h3 className="font-extrabold text-blue-500 text-center text-xl">
            Create New Post
          </h3>
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
        <footer class="bg-gray-900 p-6 text-white">
          <p>Copyright © 2023. All rights reserved.</p>
        </footer>
      </DefaultLayout>
    );
  }
}

module.exports = New;
